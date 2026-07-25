## Full description of changes in Bookimp 1.1.2

This is one of the largest internal player updates in quite some time. The main changes affect the audio system, online playback, file switching, and seeking behavior. The player also now includes a new audio engine backend.

The key change is a new playback engine architecture. The player is no longer tied to a single audio output path and can now work with multiple playback backends. In addition to the previous option, a new BASS-based backend has been added. This makes it possible to keep evolving the audio system without having to rebuild the shared player logic around each individual engine.

At the same time, real-time audio processing was reworked. The overall signal path, VST plugins, and related components now operate through a unified scheme. This reduces duplicated code and makes the behavior of different audio backends more consistent.

Work with online sources has also been significantly updated. The network audio caching mechanism was rewritten, data loading became more stable, and playback startup became faster. Issues related to loading cover art and metadata were also addressed. These improvements are especially noticeable during long listening sessions and on unstable connections.

Switching between local and network files was refined as well. The logic for track transitions, service data updates, and processing of technical file information was revised. After switching, the player state should now refresh more correctly and depend less on what kind of source had been playing before.

A lot of work also went into seeking and transitions between tracks. Some issues with clicks, leftover sound, and audio tails after seeking or stopping the previous file have been fixed. Work is still ongoing for some online scenarios, but the core audio system has already been prepared for further improvements.

Internet cache settings were also updated for network playback. Caching is now more understandable and easier to control, which should improve playback of long online files and reduce repeated downloads.

The changes also affected the interface. The audio device selection menu was updated, part of the playback settings was reworked, and some styles and icons were corrected. The "About" window was expanded and can now open automatically after installing or reinstalling the player.

The build and installer were updated as well. The release now includes the libraries required for the new audio engine, the standalone build was refined, and the related service components were updated.

This version is mainly focused on internal restructuring of the player. Many of the changes may not be immediately visible from the outside, but they make playback more stable and provide a better foundation for further work with both local and online files.
