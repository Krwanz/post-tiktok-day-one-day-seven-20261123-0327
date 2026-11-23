# post-tiktok-day-one-day-seven — perbaikan suara (voiceover)

Dibuat 2026-11-23 ~19:35 WIB atas permintaan langsung Maswan di chat:
"Gada suara" — video final ternyata tanpa audio sama sekali (ffprobe:
hanya 1 stream video h264). Perbaikan sempat dia stop siang tadi
("Neng stop dulu", 12:28 WIB), lalu dia bilang lagi "Gada suara"
19:33 WIB — itu perintah untuk melanjutkan perbaikan.

## Voice yang dipakai: Piper TTS neural, `id_ID-news_tts-medium`
- Piper 1.2.0 (biner diunduh dari GitHub releases rhasspy/piper) +
  model suara diunduh dari HuggingFace rhasspy/piper-voices
  (id/id_ID/news_tts/medium, 62,9 MB). Offline, kecepatan default.
- edge-tts `id-ID-GadisNeural` TIDAK dipakai — sudah terbukti tidak bisa
  diakses dari VM ini (proxy memutus WebSocket).
- Verifikasi suara perempuan: median F0 terukur **262 Hz** pada segmen 1
  (p25 248 / p75 269 Hz) — jelas di rentang suara perempuan, sama seperti
  voiceover humans-03 v3 (256 Hz) yang memakai voice yang sama.

## Naskah voiceover (dipasang mengikuti adegan video)
| Waktu | Voiceover |
|---|---|
| 0,2–3,0 dtk (hook) | "Game kecil ini kubuat dalam sehari!" |
| 3,5–7,4 dtk (DAY ONE) | "Ini hari pertama. Gamenya masih sederhana banget." |
| 11,0–12,9 dtk (transisi) | "Tujuh update kemudian..." |
| 13,5–18,7 dtk (DAY SEVEN) | "Lihat sekarang! Map-nya sama, start-nya sama, yang berubah cuma gamenya!" |
| 21,0–26,4 dtk (CTA) | "Buat gamemu sendiri di make.fun! AI agent kamu yang bangun, kamu yang menang!" |
| 26,4–30,0 dtk (end card) | (hening — kartu referral a15ed58m) |

Durasi tiap segmen: 2,75 / 3,91 / 1,91 / 5,23 / 5,39 detik — semuanya
muat di jendelanya tanpa percepatan.

## Cara render (di sesi ini)
- Video di-render ulang dari assets dengan `./assemble.sh` (deterministik:
  stream video hasil render ulang byte-identik dengan versi tanpa suara,
  MD5 20fba43a0d9b3731d9a79dfc3ef1b078).
- Segmen voiceover di-mix dengan ffmpeg (adelay per segmen, amix),
  lalu di-mux ke video (video stream di-copy, audio AAC 160k 48 kHz),
  audio di-pad dengan hening sampai 30,0 detik penuh.

## Verifikasi (ffprobe/ffmpeg)
- Durasi total 30.000 dtk; video 1080x1920 H.264; audio AAC 48 kHz.
- Audio decode OK; mean volume -18,1 dB, max -0,7 dB (tidak clipping).
- Silencedetect: suara aktif 0,31–2,72 / 3,51–7,18 / 11,03–12,70 /
  13,51–18,53 / 21,10–26,39 dtk — sesuai beat visual; hening 26,4–30,0
  dtk di end card (terukur -91 dB).
- Video stream MD5 final == versi tanpa suara (visual tidak berubah).

## File
- `post-tiktok-day-one-day-seven-20261123-0327.mp4` — 30,00 detik,
  1080x1920, H.264 + AAC, 2.182.373 byte. File tanpa suara TIDAK ditimpa
  di repo — versi bersuara ini yang harus diposting Maswan.
- Audio kerja di `audio/` (piper, model onnx, vo1–vo5.wav, voiceover-mix.m4a).

## Status bounty
- Video BERSUARA ini yang harus diposting Maswan (menggantikan versi
  tanpa suara). Caption tidak berubah (lihat CAPTION.md).
- VIDEO.json masih placeholder — JANGAN submit; submit hanya setelah
  Maswan posting dan mengirim link TikTok lengkap.
- Deadline posting: Senin 24 Nov 2026 10:27 WIB. Video harus tetap
  publik sampai hasil keluar (~1 Des 2026).
- Video dibuat dari 7 ronde iterasi cepat — BUKAN 7 hari kalender
  sungguhan; jangan klaim begitu.
