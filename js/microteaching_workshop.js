/**
 * Microteaching Workshop Controller (10-Minute EMI Module)
 * Handles lesson timeline pacing, transcript ticker, vocabulary category filtering, 
 * 3D flashcards, and interactive assessment.
 */

let currentPhase = 1;
let currentVocabFilter = "all";
let currentFlashcardIndex = 0;
let flashcardFlipped = false;
let userAnswers = {};

const PHASES = [
    { id: 1, name: "Phase 1: Warm-Up", duration: "2 min", desc: "Interactive Static & Lightning Hook" },
    { id: 2, name: "Phase 2: Objectives", duration: "1 min", desc: "EMI Content, Language & Cognition Goals" },
    { id: 3, name: "Phase 3: Video Exploration", duration: "2 min", desc: "Synchronized Transcript Analysis & Highlighting" },
    { id: 4, name: "Phase 4: Simulator Activity", duration: "3 min", desc: "Interactive Coulomb Charge Placement & Vector Superposition" },
    { id: 5, name: "Phase 5: Conclusion", duration: "1 min", desc: "Synthesis & Real-World Grid Connections" },
    { id: 6, name: "Phase 6: Assessment", duration: "1 min", desc: "Quick Check Quiz & Classroom Discussion" }
];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    initTimelineTracker();
    switchPhase(1);
    renderTranscript();
    renderVocabTables();
    renderFlashcard();
    renderQuiz();
    setupSimulatorInquiry();
});

function initTimelineTracker() {
    const tracker = document.getElementById("timeline-tracker");
    if (!tracker) return;
    
    tracker.innerHTML = PHASES.map(p => `
        <button onclick="switchPhase(${p.id})" id="btn-phase-${p.id}" 
            class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-left border ${
                p.id === 1 ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-400'
            }">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                p.id === 1 ? 'bg-white/20 text-white' : 'bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400'
            }">P${p.id}</div>
            <div>
                <div class="text-xs uppercase tracking-wider font-bold opacity-80">${p.duration}</div>
                <div class="text-sm font-semibold">${p.name.split(': ')[1]}</div>
            </div>
        </button>
    `).join('');
}

function switchPhase(phaseId) {
    currentPhase = phaseId;
    
    // Update tabs visibility
    PHASES.forEach(p => {
        const pane = document.getElementById(`phase-pane-${p.id}`);
        const btn = document.getElementById(`btn-phase-${p.id}`);
        if (pane) {
            if (p.id === phaseId) {
                pane.classList.remove("hidden");
                pane.classList.add("block", "animate-fadeIn");
            } else {
                pane.classList.add("hidden");
                pane.classList.remove("block");
            }
        }
        if (btn) {
            if (p.id === phaseId) {
                btn.className = "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-left border bg-blue-600 text-white border-blue-600 shadow-lg scale-102";
                btn.querySelector("div").className = "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm bg-white/20 text-white";
            } else {
                btn.className = "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-left border bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-400";
                btn.querySelector("div").className = "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400";
            }
        }
    });

    // Scroll smoothly to top of content
    window.scrollTo({ top: 120, behavior: "smooth" });
}

// --- PHASE 3: TRANSCRIPT & HIGHLIGHTER ---
function filterVocabCategory(category) {
    currentVocabFilter = category;
    
    // Update category button styling
    const btns = document.querySelectorAll(".category-chip");
    btns.forEach(b => {
        if (b.dataset.category === category) {
            b.classList.add("bg-blue-600", "text-white", "shadow-md");
            b.classList.remove("bg-slate-100", "dark:bg-slate-700", "text-slate-700", "dark:text-slate-300");
        } else {
            b.classList.remove("bg-blue-600", "text-white", "shadow-md");
            b.classList.add("bg-slate-100", "dark:bg-slate-700", "text-slate-700", "dark:text-slate-300");
        }
    });

    renderTranscript();
    renderVocabTables();
}

function renderTranscript() {
    const container = document.getElementById("transcript-box");
    if (!container || typeof MICROTEACHING_TRANSCRIPT === 'undefined') return;

    const filteredVocab = MICROTEACHING_VOCABULARY.filter(v => {
        if (currentVocabFilter === "all") return true;
        return v.pos.toLowerCase().includes(currentVocabFilter.toLowerCase());
    });

    const highlightMap = {};
    filteredVocab.forEach(v => {
        highlightMap[v.term.toLowerCase()] = {
            term: v.term,
            pos: v.pos,
            colorClass: getCategoryBadgeClass(v.pos)
        };
    });

    container.innerHTML = MICROTEACHING_TRANSCRIPT.map((line, idx) => {
        let text = line.text;
        
        // Highlight matching terms in text if filter applies
        Object.keys(highlightMap).forEach(key => {
            const regex = new RegExp(`\\b(${key})\\b`, 'gi');
            text = text.replace(regex, `<mark class="px-1 py-0.5 rounded text-xs font-bold cursor-pointer transition-colors ${highlightMap[key].colorClass}" onclick="event.stopPropagation(); showVocabModal('${key}')">$1</mark>`);
        });

        return `
            <div id="transcript-row-${idx}" class="p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all flex gap-3 items-start cursor-pointer opacity-85 hover:opacity-100" onclick="jumpToVideo('${line.time}')">
                <span id="transcript-time-${idx}" class="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold shrink-0">${line.time}</span>
                <p class="text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">${text}</p>
            </div>
        `;
    }).join('');

    updateTranscriptHighlighting();
}

// --- YOUTUBE & TRANSCRIPT REAL-TIME SYNC ENGINE ---
let ytPlayer = null;
let videoSyncInterval = null;
let simulatedSyncInterval = null;
let currentVideoSeconds = 0;
let autoScrollEnabled = true;
let isSimulatedPlaying = false;

// Convert time string "1:15" to seconds (75)
function parseTimeStringToSeconds(timeStr) {
    if (!timeStr) return 0;
    const parts = timeStr.split(":");
    if (parts.length === 2) {
        return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
    }
    return 0;
}

// Convert seconds back to "M:SS"
function formatSecondsToTimeString(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// YouTube API hook global callback
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('youtube-player', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        if (simulatedSyncInterval) {
            clearInterval(simulatedSyncInterval);
            simulatedSyncInterval = null;
            isSimulatedPlaying = false;
            updatePlayTickerButtonState();
        }
        startVideoSyncMonitor();
    } else {
        stopVideoSyncMonitor();
    }
}

function startVideoSyncMonitor() {
    if (videoSyncInterval) clearInterval(videoSyncInterval);
    videoSyncInterval = setInterval(() => {
        if (ytPlayer && ytPlayer.getCurrentTime && typeof ytPlayer.getCurrentTime === 'function') {
            try {
                const t = ytPlayer.getCurrentTime();
                if (t >= 0) {
                    currentVideoSeconds = t;
                    updateTranscriptHighlighting();
                }
            } catch(e) {}
        }
    }, 200);
}

function stopVideoSyncMonitor() {
    if (videoSyncInterval) {
        clearInterval(videoSyncInterval);
        videoSyncInterval = null;
    }
}

function toggleSimulatedVideoSync() {
    if (isSimulatedPlaying) {
        if (simulatedSyncInterval) clearInterval(simulatedSyncInterval);
        simulatedSyncInterval = null;
        isSimulatedPlaying = false;
        if (ytPlayer && ytPlayer.pauseVideo && typeof ytPlayer.pauseVideo === 'function') {
            try { ytPlayer.pauseVideo(); } catch (e) {}
        }
    } else {
        isSimulatedPlaying = true;
        if (ytPlayer && ytPlayer.playVideo && typeof ytPlayer.playVideo === 'function') {
            try { ytPlayer.playVideo(); } catch (e) {}
        }
        if (simulatedSyncInterval) clearInterval(simulatedSyncInterval);
        simulatedSyncInterval = setInterval(() => {
            currentVideoSeconds += 0.2;
            if (currentVideoSeconds >= 110) { // 1:48 end
                currentVideoSeconds = 0;
            }
            updateTranscriptHighlighting();
        }, 200);
    }
    updatePlayTickerButtonState();
}

function updatePlayTickerButtonState() {
    const btn = document.getElementById("btn-sync-play");
    const label = document.getElementById("sync-play-label");
    if (!btn || !label) return;
    if (isSimulatedPlaying) {
        btn.className = "px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all";
        label.innerText = "Pause Ticker";
        btn.querySelector("i").setAttribute("data-lucide", "pause");
    } else {
        btn.className = "px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all";
        label.innerText = "Play Ticker";
        btn.querySelector("i").setAttribute("data-lucide", "play");
    }
    if (window.lucide) lucide.createIcons();
}

function setAutoScrollState(enabled) {
    autoScrollEnabled = enabled;
}

function resetTranscriptTimeline() {
    currentVideoSeconds = 0;
    if (isSimulatedPlaying) toggleSimulatedVideoSync();
    if (ytPlayer && ytPlayer.seekTo && typeof ytPlayer.seekTo === 'function') {
        try {
            ytPlayer.seekTo(0, true);
            ytPlayer.pauseVideo();
        } catch(e) {}
    }
    updateTranscriptHighlighting();
}

function jumpToVideo(timeStr) {
    const targetSeconds = parseTimeStringToSeconds(timeStr);
    currentVideoSeconds = targetSeconds;
    if (ytPlayer && ytPlayer.seekTo && typeof ytPlayer.seekTo === 'function') {
        try {
            ytPlayer.seekTo(targetSeconds, true);
            ytPlayer.playVideo();
        } catch(e) {}
    } else if (!isSimulatedPlaying) {
        toggleSimulatedVideoSync();
    }
    updateTranscriptHighlighting();
}

function updateTranscriptHighlighting() {
    if (typeof MICROTEACHING_TRANSCRIPT === 'undefined') return;

    // Update status badge
    const badge = document.getElementById("sync-status-badge");
    if (badge) {
        badge.innerText = `TIME: ${formatSecondsToTimeString(currentVideoSeconds)}`;
    }

    // Find active line
    let activeIdx = 0;
    for (let i = 0; i < MICROTEACHING_TRANSCRIPT.length; i++) {
        const lineSec = parseTimeStringToSeconds(MICROTEACHING_TRANSCRIPT[i].time);
        if (currentVideoSeconds >= lineSec) {
            activeIdx = i;
        } else {
            break;
        }
    }

    // Highlight active line
    MICROTEACHING_TRANSCRIPT.forEach((_, idx) => {
        const row = document.getElementById(`transcript-row-${idx}`);
        const badgeSpan = document.getElementById(`transcript-time-${idx}`);
        if (!row) return;

        if (idx === activeIdx) {
            row.className = "p-3.5 rounded-xl border-2 border-blue-500 dark:border-blue-400 bg-blue-500/15 dark:bg-blue-500/20 shadow-md scale-[1.01] transition-all flex gap-3 items-start cursor-pointer";
            if (badgeSpan) badgeSpan.className = "px-2 py-1 rounded bg-blue-600 text-white font-mono text-xs font-bold shrink-0 shadow-sm";
            if (autoScrollEnabled) {
                row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        } else {
            row.className = "p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all flex gap-3 items-start cursor-pointer opacity-80 hover:opacity-100";
            if (badgeSpan) badgeSpan.className = "px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold shrink-0";
        }
    });
}

function getCategoryBadgeClass(pos) {
    const p = pos.toLowerCase();
    if (p.includes("noun")) return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200 border border-emerald-300";
    if (p.includes("verb")) return "bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-200 border border-purple-300";
    if (p.includes("connector") || p.includes("marker")) return "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200 border border-amber-300";
    if (p.includes("adjective")) return "bg-sky-100 text-sky-800 dark:bg-sky-900/60 dark:text-sky-200 border border-sky-300";
    return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200";
}

function renderVocabTables() {
    const container = document.getElementById("vocab-table-body");
    if (!container || typeof MICROTEACHING_VOCABULARY === 'undefined') return;

    const filtered = MICROTEACHING_VOCABULARY.filter(v => {
        if (currentVocabFilter === "all") return true;
        return v.pos.toLowerCase().includes(currentVocabFilter.toLowerCase());
    });

    container.innerHTML = filtered.map(v => `
        <tr class="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <td class="p-4">
                <div class="font-bold text-base text-blue-600 dark:text-blue-400 cursor-pointer" onclick="showVocabModal('${v.term}')">${v.term}</div>
                <div class="font-mono text-xs text-slate-500">${v.ipa}</div>
            </td>
            <td class="p-4">
                <span class="px-2.5 py-1 rounded-full text-xs font-semibold ${getCategoryBadgeClass(v.pos)}">${v.pos}</span>
            </td>
            <td class="p-4 text-sm text-slate-700 dark:text-slate-300">
                ${v.definition}
            </td>
            <td class="p-4 font-mono text-xs text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-900/40 rounded">
                ${v.equation || 'N/A'}
            </td>
            <td class="p-4 text-center">
                <button onclick="showVocabModal('${v.term}')" class="p-2 rounded-lg bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all">
                    <span class="material-symbols-outlined text-sm">open_in_new</span>
                </button>
            </td>
        </tr>
    `).join('');
}

function showVocabModal(term) {
    const item = MICROTEACHING_VOCABULARY.find(v => v.term.toLowerCase() === term.toLowerCase());
    if (!item) return;

    const modal = document.getElementById("vocab-modal");
    const content = document.getElementById("vocab-modal-content");
    if (!modal || !content) return;

    content.innerHTML = `
        <div class="flex justify-between items-start border-b border-slate-200 dark:border-slate-700 pb-4 mb-4">
            <div>
                <span class="px-2.5 py-1 rounded-full text-xs font-semibold ${getCategoryBadgeClass(item.pos)} mb-2 inline-block">${item.pos} • ${item.group}</span>
                <h3 class="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
                    <span>${item.term}</span>
                    <span class="font-mono text-base text-slate-500 font-normal">${item.ipa}</span>
                </h3>
            </div>
            <button onclick="closeVocabModal()" class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 transition-colors">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>

        <div class="space-y-4 text-sm">
            <div class="p-3.5 bg-blue-50 dark:bg-slate-800 rounded-xl border-l-4 border-blue-600">
                <h4 class="font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider text-xs mb-1">Academic Definition</h4>
                <p class="text-slate-700 dark:text-slate-200 leading-relaxed">${item.definition}</p>
            </div>

            <div class="p-3.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border-l-4 border-amber-500">
                <h4 class="font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider text-xs mb-1">Exact Video Quote (${item.character})</h4>
                <p class="italic text-slate-700 dark:text-slate-300">"${item.quote}"</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
                    <h4 class="font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider text-xs mb-1">Etymology & Origin</h4>
                    <p class="text-slate-600 dark:text-slate-300">${item.etymology}</p>
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
                    <h4 class="font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider text-xs mb-1">Pragmatic & Cultural Note</h4>
                    <p class="text-slate-600 dark:text-slate-300">${item.culturalNote}</p>
                </div>
            </div>

            <div class="p-3 bg-slate-900 text-emerald-400 rounded-xl font-mono text-xs overflow-x-auto border border-slate-700">
                <div class="text-slate-400 text-[10px] uppercase font-bold mb-1">// Grammar Construction & Formula</div>
                ${item.equation || 'Standard syntactic structure'}
            </div>

            <div class="grid grid-cols-2 gap-3 pt-2">
                <div>
                    <span class="font-bold text-xs uppercase text-slate-500 block mb-1">Synonyms:</span>
                    <div class="flex flex-wrap gap-1.5">
                        ${(item.synonyms || []).map(s => `<span class="px-2 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">${s}</span>`).join('') || '<span class="text-slate-400 text-xs">None listed</span>'}
                    </div>
                </div>
                <div>
                    <span class="font-bold text-xs uppercase text-slate-500 block mb-1">Antonyms:</span>
                    <div class="flex flex-wrap gap-1.5">
                        ${(item.antonyms || []).map(a => `<span class="px-2 py-0.5 bg-rose-100 dark:bg-rose-900/40 text-rose-800 dark:text-rose-300 rounded text-xs">${a}</span>`).join('') || '<span class="text-slate-400 text-xs">None listed</span>'}
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeVocabModal() {
    const modal = document.getElementById("vocab-modal");
    if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }
}

// --- FLASHCARDS 3D ENGINE ---
function renderFlashcard() {
    const card = document.getElementById("flashcard-container");
    if (!card || typeof MICROTEACHING_VOCABULARY === 'undefined') return;

    const item = MICROTEACHING_VOCABULARY[currentFlashcardIndex];
    if (!item) return;

    flashcardFlipped = false;
    card.style.transform = "rotateY(0deg)";

    document.getElementById("fc-counter").innerText = `Card ${currentFlashcardIndex + 1} of ${MICROTEACHING_VOCABULARY.length}`;
    
    // Front side
    document.getElementById("fc-front-term").innerText = item.term;
    document.getElementById("fc-front-ipa").innerText = item.ipa;
    document.getElementById("fc-front-pos").innerText = item.pos;
    document.getElementById("fc-front-pos").className = `px-3 py-1 rounded-full text-xs font-bold uppercase ${getCategoryBadgeClass(item.pos)}`;

    // Back side
    document.getElementById("fc-back-def").innerText = item.definition;
    document.getElementById("fc-back-quote").innerText = `"${item.quote}"`;
    document.getElementById("fc-back-equation").innerText = item.equation || 'N/A';
}

function flipCard() {
    const card = document.getElementById("flashcard-container");
    if (!card) return;
    flashcardFlipped = !flashcardFlipped;
    card.style.transform = flashcardFlipped ? "rotateY(180deg)" : "rotateY(0deg)";
}

function nextCard() {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % MICROTEACHING_VOCABULARY.length;
    renderFlashcard();
}

function prevCard() {
    currentFlashcardIndex = (currentFlashcardIndex - 1 + MICROTEACHING_VOCABULARY.length) % MICROTEACHING_VOCABULARY.length;
    renderFlashcard();
}

function pronounceWord(term) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(term || MICROTEACHING_VOCABULARY[currentFlashcardIndex].term);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
}

// --- PHASE 4: SIMULATOR INQUIRY ---
function setupSimulatorInquiry() {
    const checks = document.querySelectorAll(".inquiry-checkbox");
    checks.forEach(c => {
        c.addEventListener("change", () => {
            const checkedCount = document.querySelectorAll(".inquiry-checkbox:checked").length;
            const progressText = document.getElementById("inquiry-progress-text");
            const progressBar = document.getElementById("inquiry-progress-bar");
            if (progressText) progressText.innerText = `${checkedCount} of 3 tasks verified`;
            if (progressBar) progressBar.style.width = `${(checkedCount / 3) * 100}%`;
            
            if (checkedCount === 3 && typeof Swal !== 'undefined') {
                Swal.fire({
                    title: "Excellent Inquiry Work!",
                    text: "You have verified Coulomb's principle of superposition and vector direction!",
                    icon: "success",
                    confirmButtonColor: "#0b57d0"
                });
            }
        });
    });
}

// --- PHASE 6: QUIZ ASSESSMENT ---
function renderQuiz() {
    const container = document.getElementById("quiz-container");
    if (!container || typeof MICROTEACHING_QUIZ === 'undefined') return;

    container.innerHTML = MICROTEACHING_QUIZ.map((q, idx) => `
        <div class="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
            <div class="flex items-start gap-3">
                <span class="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">${idx + 1}</span>
                <h4 class="font-bold text-slate-800 dark:text-white text-base leading-snug">${q.question}</h4>
            </div>
            
            <div class="grid grid-cols-1 gap-2.5 pl-10" id="q-options-${q.id}">
                ${q.options.map((opt, optIdx) => `
                    <button onclick="selectAnswer('${q.id}', ${optIdx})" id="btn-${q.id}-${optIdx}" class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-left text-sm hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-slate-700/50 transition-all flex items-center gap-3">
                        <span class="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-xs font-mono">${String.fromCharCode(65 + optIdx)}</span>
                        <span>${opt}</span>
                    </button>
                `).join('')}
            </div>

            <div id="q-feedback-${q.id}" class="hidden pl-10 pt-2 text-sm font-medium"></div>
        </div>
    `).join('');
}

function selectAnswer(qid, selectedIndex) {
    const q = MICROTEACHING_QUIZ.find(item => item.id === qid);
    if (!q) return;

    // Highlight options
    q.options.forEach((_, idx) => {
        const btn = document.getElementById(`btn-${qid}-${idx}`);
        if (idx === q.correct) {
            btn.className = "p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 text-left text-sm font-semibold flex items-center gap-3";
            btn.querySelector("span").className = "w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-mono";
        } else if (idx === selectedIndex) {
            btn.className = "p-3 rounded-xl border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 text-left text-sm flex items-center gap-3";
            btn.querySelector("span").className = "w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-mono";
        } else {
            btn.className = "p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-left text-sm opacity-50 flex items-center gap-3";
        }
        btn.disabled = true;
    });

    // Show feedback
    const feedback = document.getElementById(`q-feedback-${qid}`);
    if (feedback) {
        feedback.classList.remove("hidden");
        if (selectedIndex === q.correct) {
            feedback.innerHTML = `<div class="p-3 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-xl border border-emerald-300 flex items-center gap-2">
                <span class="material-symbols-outlined">check_circle</span>
                <span><strong>Correct!</strong> ${q.explanation}</span>
            </div>`;
        } else {
            feedback.innerHTML = `<div class="p-3 bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 rounded-xl border border-rose-300 flex items-center gap-2">
                <span class="material-symbols-outlined">cancel</span>
                <span><strong>Incorrect.</strong> ${q.explanation}</span>
            </div>`;
        }
    }
}
