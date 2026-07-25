## Bookimp Android 1.6-stb - Changelog

#### Audio and Playback
- Improved playback of 4-channel OGG/Vorbis and optimized multichannel audio processing.
- Improved channel balance handling for 4-channel audio.
- Added and optimized native audio processing to reduce CPU load and minimize freezes.
- Improved detection and display of audio file information.
- Refined media library scanning and audio information saving.

#### Interface and Library
- Improved cover art and waveform behavior on the playback screen.
- The Back button on the equalizer screen now returns to the main player screen.
- Optimized rendering of cards and the SViD library screen.
- Added special format badges on cards and on the playback screen for books compatible with voice/background balance control.
- Added Boosty with direct link access to the support details.
- Updated interface texts and localizations.

#### Stability
- Added internal stability improvements and release-preparation updates.

---

## Bookimp 1.1.2 - Changelog

#### Audio Engine and Playback
- Introduced a new audio engine architecture with support for multiple playback backends.
- Added a new BASS-based backend.
- Reworked the internal audio pipeline and unified real-time audio processing.
- Improved compatibility and internal organization of VST processing.
- Refined switching between tracks and different source types.
- Improved seek and transition handling during playback, reducing unwanted tails and artifacts.

#### Online Playback and Caching
- Completely rebuilt the online playback and network caching system.
- Accelerated startup for online file playback.
- Improved cover art and metadata loading for network sources.
- Added and improved internet cache settings.

#### Settings and Build
- Updated the audio devices menu, playback backends, and related parameters.
- Updated the build and installer for the new audio architecture and dependencies.
- Full change description: <a href="changelog.html?lang=en" target="_blank" rel="noopener noreferrer">EN</a> | <a href="changelog.html?lang=ru" target="_blank" rel="noopener noreferrer">RU</a>

---

## Bookimp 1.0.6 вЂ” Changelog

#### Internet Audio and Caching
- Added caching for online audio files with support for partially downloaded ranges.
- Faster online MP3 startup and chapter switching.
- Improved seeking into MP3 and OGG sections that have not been downloaded yet.
- Added preloading for the beginning of the next online chapter.
- Original multichannel files are preserved without conversion.
- The player now works correctly with servers that do not support HTTP Range.
- Fully downloaded internet files are played as local files.
- Downloaded data is reused when downloading a book from the SViD library.
- Added settings for maximum cache size and cache retention time.
- Added clearing for the entire audio cache and for individual playlist caches.

#### Interface
- The waveform for an internet file is now built gradually as the file is cached.
- The waveform now shows online file download progress.
- Removed the artificial placeholder waveform for internet sources.
- Fixed old waveform and track information appearing when switching between files.
- Fixed buffering status display during startup and seeking.
- Position and playback duration are now displayed correctly for files without HTTP Range support.
- Added buttons to the mini-player for hiding it, opening the main window, and closing the app.

#### Metadata, Playlists, and Covers
- Faster retrieval of metadata and duration for internet files.
- Increased the metadata reading timeout for slow servers.
- Fixed rescanning of previously added internet files.
- Online sources with temporarily unknown duration are no longer detected as radio.
- Covers are now preserved when exporting and importing M3U, M3U8, PLS, XSPF, and CUE playlists.
- Full playlist export now also includes covers and can restore them after a clean reinstall.
- Compatibility with export files from previous versions is preserved.

#### App Updates
- Added built-in checks for new versions.
- The installer can now be downloaded directly from the app.
- Before installation starts, the SHA-256 checksum of the downloaded file is verified.
- Added the ability to skip a proposed update version.
- A regular update preserves playlists, bookmarks, settings, presets, covers, and cache.
- The installer now includes an optional "Clean install" mode with a warning about deleting user data.

#### Fixes
- Fixed switching to the next chapter after seeking in the current online file.
- Fixed online sources getting stuck during buffering.
- Fixed delays and flickering in the "Buffering..." status.
- Fixed partially downloaded online sources.
- Eliminated a race between the old and new decoder after seeking.
- Fixed waveform, timecode, and current track information display issues.
- Improved playback stability for internet radio and regular online files.

---

## What's New (Version 1.0.5)

#### Changes:
- Fixed opening a single file from File Explorer when the player was closed. The file is now correctly added to the default playlist and playback starts.
- Fixed handling multiple selected files in File Explorer via "Add to new playlist". A single new playlist is now created for the whole selected group instead of creating a separate playlist for each file.
- Fixed dragging files from File Explorer into the default playlist. Previously this worked only for regular playlists.
- Improved reading embedded cover art from metadata. Covers are now displayed correctly for OGG and related scenarios, including when opened through CUE.
- Fixed bookmarks in the default playlist after restarting the app. They now correctly find the required track and no longer become invalid.

#### Additional:
- Improved handling of commands from the Windows context menu.
- Fixed edge cases in the default playlist that made some features unstable.

---

## What's New (Version 1.0.2)

#### Complete rebuild of the playlist service:
- Support for large playlists (for 100k+ tracks: initial add time depends on disk speed and metadata volume; save/load time is ~1.5 sec)
- Asynchronous metadata reading: tracks appear in the playlist almost immediately, with no need to wait for the full load to complete
- Metadata reading for network sources
- Import/export of all playlists in a custom binary format
- Opening/saving playlists in `.m3u`, `.m3u8`, `.pls`, `.xspf`, and `.cue` formats
- Fast sorting/searching (100k+ tracks, ~0.8...1 sec)
- Playlist rendering migrated to a model/view architecture, minimizing memory usage on the display side
- Saving file addition paths for each playlist
- Automatic playlist naming based on metadata/names/parent folder (selected automatically), so no more "Playlist X"
- Expanded automatic cover art search

#### Optimization of the bookmarks service: less memory usage, higher speed (1k+ bookmarks)
- Added handling of invalid bookmarks when the playlist/track is missing

#### Complete rebuild of the audio engine (FFmpeg + PortAudio + VST2)
- Support for playback of an even wider range of formats
- Support for network sources (seeking only works for sources that allow it; for example, internet radio does not)
- Added a native signal measurement module, so no more external calculations
- Significant CPU load optimization for the entire playback process
- Added the ability to save presets for VST plugins
- The audio stream now runs without the GIL, with almost fully native C execution (Cython)
- All audio processes now run in 32-bit float
- Added resampling (with the option to disable it)

#### Added a web interface for controlling the player over the network
- Built-in client
- Support for external clients (WebSockets, API available [here](web-interface/web-api.ru.md))

#### Added tray mode
- Mini-player interface available
- Control from the tray context menu

#### Added a File Explorer context menu for folders/files
- Play (using the "default" playlist), add to the current/new playlist

#### Added the online SViD library
- Add any book to the current or a new playlist (as an online source)
- Ability to download a book and automatically add it to a playlist

#### Other minor changes
