/* Variables */
	/* Main Page & Portable Player */

		var MediaPlayerSection = document.getElementById("MediaPlayerSection");
		var SongTrack = document.getElementById("SongTrack");
		var MusicPlayer = document.getElementById("BackgroundMusic");
		var SongCount = document.getElementById("SongCount");
		var ChecboxesSection = document.getElementById("CheckboxesSection");
		var PlayerSize = document.getElementById("PlayerSize");
		var CurrentlyPlaying = document.getElementById("CurrentlyPlaying");
		var PlayButton = document.getElementById("PlayButton");
		var NextSong = document.getElementById('NextSong');
		var PreviousSong = document.getElementById('PreviousSong');
		var VolumeCell = document.getElementById('VolumeCell');
		var SongSelection = document.getElementById('SongSelection');
		var VolumeSlider = document.getElementById('VolumeSlider');
		var VolumeNumber = document.getElementById('VolumeNumber');
		var PlayTimeCurrent = document.getElementById('PlayTimeCurrent');
		var CurrentPlayback = document.getElementById('CurrentPlayback');
		var PlayTrack = document.getElementById('PlayTrack');
		var PlayTimeTotal = document.getElementById('PlayTimeTotal');
		var TotalPlayback = document.getElementById('TotalPlayback');
		var ShuffleModeCheck = document.getElementById("ShuffleModeCheck");
		var RepeatModeCheck = document.getElementById("RepeatModeCheck");
		var LoopModeCheck = document.getElementById("LoopModeCheck");
		var ThemeModeCheck = document.getElementById("ThemeModeCheck");
		var SongSelection = document.getElementById("SongSelection");
		var SongCategory = document.getElementById("SongCategory");
		var ArrowUp = document.getElementById("ArrowUp");
		var ArrowDown = document.getElementById("ArrowDown");
		var PlayTrackFill = document.getElementById("PlayTrackFill");
		var PlayTrackThumb = document.getElementById("PlayTrackThumb");
		var VolumeControlTable = document.getElementById("VolumeControlTable");
		var VolumeFill = document.getElementById("VolumeFill");
		var VolumeThumb = document.getElementById("VolumeThumb");
		var VolumeBody = document.getElementById("VolumeBody");
		var VolumeArc = document.getElementById("VolumeArc");
		var VolumeBar1 = document.getElementById("VolumeBar1");
		var VolumeBar2 = document.getElementById("VolumeBar2");
		var VolumeBar3 = document.getElementById("VolumeBar3");
		var VolumeBar4 = document.getElementById("VolumeBar4");
		var VolumeBar5 = document.getElementById("VolumeBar5");
		var VolumeX = document.getElementById("VolumeX");
		var PortablePlayerLink = document.getElementById("PortablePlayerLink");
		var ClearPlaylistLink = document.getElementById("ClearPlaylistLink");
		var ScaleLinkx1 = document.getElementById("ScaleLinkx1");
		var ScaleLinkx2 = document.getElementById("ScaleLinkx2");
		var ScaleLinkx3 = document.getElementById("ScaleLinkx3");
		var ScaleLinkx4 = document.getElementById("ScaleLinkx4");
		var NumberOfSongs = document.getElementById("NumberOfSongs");
		var ListenedSongs = document.getElementById("ListenedSongs");
		var MainContent = document.getElementById("MainContent");
		var ContentShade = document.getElementById("ContentShade");
		var ThemeSelection = document.getElementById("ThemeSelection");
		var GetSongPlaybackTime = localStorage.getItem("SongPlaybackTime");
		var GetSavedPlaylist = localStorage.getItem("PlaylistStorage");
		var GetPlaylistAllSongs = localStorage.getItem("PlayedAllSongsStorage");
		var GetShuffleMode = localStorage.getItem("ShuffleModeCheck")
		var GetRepeatMode = localStorage.getItem("RepeatModeCheck");
		var GetLoopMode = localStorage.getItem("LoopModeCheck");
		var GetThemeMode = localStorage.getItem("ThemeModeCheck");
		var GetCurrentVolume = localStorage.getItem("CurrentVolume");
		var GetPlaylistCount = localStorage.getItem("PlaylistCounter");
		var GetIsPlaying = localStorage.getItem("IsPlaying");
		var GetSongList = localStorage.getItem("SongList");
		var CurrentTheme = localStorage.getItem("SavedTheme");
		var ScaleNumber = localStorage.getItem("SavedScale");
		
	/* MainPage */
			
		var StopwatchLink = document.getElementById("StopwatchLink");
		var HTMLPreviewLink = document.getElementById("HTMLPreviewLink");

	/* JavaScript */
	
		var HostURL = "http://eternitytrials.000webhostapp.com/Media/";
		var PlaylistCount;
		var IsSongPlaying;
		var LoopMode;
		var ShuffleMode;
		var RepeatMode;
		var ThemeMode;
		var SongNumber;
		var SongName;
		var FirstSong;
		var RandomNumber;
		var CheckInput;
		var ErrorCheck;
		var DonePlayingAllSongs;
		var CheckRepeatedSong;
		var Playlist = [];
		var TotalSongs = [];
		var PlayedAllSongsStorage = [];
		var Themes = 
					[
						"Apple Bloom",
						"Applejack",
						"Fluttershy",
						"Original",
						"Pinkie Pie",
						"Rainbow Dash",
						"Rarity",
						"Scootaloo",
						"Starlight Glimmer",
						"Sunset Shimmer",
						"Sweetie Belle",
						"Trixie",
						"Twilight Sparkle"
					];
		var SongID;
		var PlaySecondUp;
		var PlayMinuteUp;
		var PlaySecondDown;
		var PlayMinuteDowm;
		var PlayMinuteCounter;
		var PlayEnd;
		var PlayTime;
		var PlayTilEnd;
		var PlayEndTime;
		var SongDuration;
		var SongTime;
		var SongSelectorID;
		var SongOption;
		var LastSong;
		var VolumeOver;
		var ThemeCount;
		
	/* HTML Preview */
	
		var HTMLEditBox = document.getElementById('HTMLEditBox');
		
	/* F-List Icon Search */
	
		var SearchInput = document.getElementById("SearchField");
		var Icon = document.getElementById("SearchIcon");
		var IconLink = document.getElementById("ProfileLink");
		var EiconLink = document.getElementById("EiconLink");
		var Eicon = document.getElementById("SearchEicon");
		var IconMatch = document.getElementById("IconMatchResults");
		var EiconMatch = document.getElementById("EiconMatchResults");
		
function initialSetup()
	{
		for (count = -1; count < Themes.length; count++)
			{
				ThemeOption = document.createElement('div');
				if (count == -1)
					{
						ThemeOption.setAttribute("ID", "SelectTheme");
						ThemeOption.textContent = "Select Theme...";
						ThemeSelection.appendChild(ThemeOption);
						SelectTheme = document.getElementById("SelectTheme");
					}
				else
					{
						ThemeOption.setAttribute("ID", Themes[count].replace(' ', '_'));
						ThemeOption.textContent = Themes[count];
						ThemeSelection.appendChild(ThemeOption);
						window[Themes[count].replace(' ', '') + "Theme"] = document.getElementById(Themes[count].replace(' ', '_'));
					}
			}
		assignEvents();
		preliminaryChecks();
		changeTheme();
		setSong(0);
		checkControls();
	}
		
function assignEvents()
	{
		/* Main & Portable Player */
		
			ContentShade.addEventListener("click", resetPlayerSize);
			PlayTrack.addEventListener("change", seekMusic);
			PlayTrack.addEventListener("input", seekMusic);
			VolumeControlTable.addEventListener("mouseover", function() { setVolumeWidth(1); VolumeOver = 1; });
			VolumeControlTable.addEventListener("mouseout", function() { VolumeOver = 0; });
			VolumeSlider.addEventListener("change", setVolume);
			VolumeSlider.addEventListener("input", setVolume);
			PreviousSong.addEventListener("click", playPreviousSong);
			PlayButton.addEventListener("click", playMusic);
			NextSong.addEventListener("click", playNextSong);
			RepeatModeCheck.addEventListener("click", repeatMode);
			ShuffleModeCheck.addEventListener("click", shuffleMode);
			LoopModeCheck.addEventListener("click", loopMode); 
			ThemeModeCheck.addEventListener("click", themeMode); 
			ClearPlaylistLink.addEventListener("click", clearPlaylist);
			ScaleLinkx1.addEventListener("click", function() { scalePlayer(1) });
			ScaleLinkx2.addEventListener("click", function() { scalePlayer(2) });
			ScaleLinkx3.addEventListener("click", function() { scalePlayer(3) });
			ScaleLinkx4.addEventListener("click", function() { scalePlayer(4) });
			SongSelection.addEventListener("mouseenter", function() { setTimeout(function() { scrollToPlaying(0); }, 0001); }); 
			SongSelection.addEventListener("mouseleave", function() { setTimeout(function() { scrollToPlaying(6); }, 0100); }); 
			MusicPlayer.addEventListener("error", function() { checkError(1); });
			MusicPlayer.addEventListener("loadstart", loading);
			MusicPlayer.addEventListener("timeupdate", getPlayTime);
			MusicPlayer.addEventListener("ended", musicEnded);
			ThemeSelection.addEventListener("mouseleave", function() { this.scrollTop = 0; });

			for (count = 0; count < Themes.length; count++)
				{
					document.getElementById(Themes[count].replace(' ', '_')).addEventListener("click", function() { CurrentTheme = this.id; changeTheme(); });
				}
				
			if (IsPortable == 0)
				{
					PortablePlayerLink.addEventListener("click", portableMode);
					HTMLPreviewLink.addEventListener("click", hTMLPreview); 
					StopwatchLink.addEventListener("click", stopWatch);
				}
			
			if (IsPortable == 1)
				{
					PortablePlayerLink.addEventListener("click", function() { window.close(); });
				}
				
			console.log("Events were successfully assigned to elements...");
	}

initialSetup();

/* Music Player */

	function preliminaryChecks()
			{	
			
				if (CurrentTheme === null || CurrentTheme <= 13)
					{
						localStorage.setItem("SavedTheme", "Original");
						CurrentTheme = localStorage.getItem("SavedTheme");
					}
					
				if (ScaleNumber === null)
					{
						localStorage.setItem("SavedScale", 1);
						ScaleNumber = localStorage.getItem("SavedScale");
					}
					
				if (IsPortable == 1)
					{
						MusicPlayer.innerHTML = GetSongList;
					}

				LastSong = MusicPlayer.childElementCount;
				NumberOfSongs.textContent = MusicPlayer.childElementCount;
				
				buildSongList();
			
				if (GetSavedPlaylist === null)
					{
						SongNumber = Math.floor((Math.random() * LastSong));
						SongName = TotalSongs[SongNumber];
						CheckRepeatedSong = Playlist.indexOf(SongName);
						checkIfSongNotListened();
						Playlist.push(TotalSongs[SongNumber]);
						localStorage.setItem("PlaylistStorage", Playlist);
						PlaylistCount = Playlist.length-1;
						localStorage.setItem("PlaylistCounter", PlaylistCount);
					}
				else
					{
						Playlist = GetSavedPlaylist.split(",");
						PlayedAllSongsStorage = GetPlaylistAllSongs.split(",");
						PlaylistCount = Number(GetPlaylistCount);
						SongName = Playlist[PlaylistCount];
						SongNumber = TotalSongs.indexOf[SongName];
					}
					
				if (GetCurrentVolume === null)
					{
						localStorage.setItem("CurrentVolume", 100);
						GetCurrentVolume = localStorage.getItem("CurrentVolume");
					}
				
				if (GetSongPlaybackTime === null)
					{
						localStorage.setItem("SongPlaybackTime", 0);
					}
					
				localStorage.setItem("SongList", MusicPlayer.innerHTML);
			}
			
	function buildSongList()
			{				
				for (Song = 0; Song < LastSong; Song++)
					{	
						SongName = MusicPlayer.children[Song].title.replace(/ /g, '_').replace(/,/g, '');
						MusicPlayer.children[Song].setAttribute("id", SongName);
						MusicPlayer.children[Song].setAttribute("data-artist", "My Little Pony: Friendship is Magic");
						GeneratedID = document.getElementById(MusicPlayer.children[Song].id);
						GeneratedID.src = HostURL + GeneratedID.src.substr(GeneratedID.src.lastIndexOf('/') + 1);
						TotalSongs.push(SongName);
						SongOption = document.createElement("Span");
						SongOption.textContent = document.getElementById(SongName).title;
						SongOption.addEventListener("click", selectSong);
						SongOption.setAttribute("ID", SongName+"-Selected");
						SongOption.setAttribute("Class", "Song Song"+CurrentTheme);
						SongSelection.appendChild(SongOption);
						SongNumber++;
					}
			}
			
	function setSong(NewSongCheck)
		{
			SongName = Playlist[PlaylistCount];
			SongID = document.getElementById(SongName);
			
			if (NewSongCheck == 1)
				{
					resetPlayTime();
					MusicPlayer.removeEventListener("loadeddata", setPlayTime);
					MusicPlayer.addEventListener("loadeddata", getPlayTime);
				}
			else
				{
					MusicPlayer.removeEventListener("loadeddata", getPlayTime);
					MusicPlayer.addEventListener("loadeddata", setPlayTime);
					MusicPlayer.addEventListener("loadeddata", getPlayTime);
				}
				
			MusicPlayer.src = SongID.src;
			SongCategory.textContent = SongID.dataset.artist;
					if (ThemeMode == 1)
						{
							RandomNumber = Math.floor((Math.random() * Themes.length));
							CheckRepeated = RandomNumber;
							while (RandomNumber == CheckRepeated)
								{
									RandomNumber = Math.floor((Math.random() * Themes.length));
								}
							CurrentTheme = Themes[RandomNumber].replace(' ', '_');
							changeTheme();
						}
			SongNumber = TotalSongs.indexOf(SongName);
			setTimeout(function() { scrollToPlaying(6); }, 0100);
			checkError(0);
			console.log("Song "+document.getElementById(SongName).title+" (Number "+(PlaylistCount+1)+" in playlist) was set. Updating Playlist: "+localStorage.getItem("PlaylistStorage").replace(/_/g, ' ').replace(/,/g, ', ')+"."+"\n"+"Total Songs in Playlist: "+Playlist.length+".");
		}
			
	function playMusic()
		{
			if (MusicPlayer.paused)
				{
					MusicPlayer.play();
				}
			PlayButton.value = "Pause";
			PlayButton.removeEventListener("click", playMusic);
			PlayButton.addEventListener("click", pauseMusic);
			localStorage.setItem("IsPlaying", 1);
			GetIsPlaying = localStorage.getItem("IsPlaying");
			console.log("Music is now playing.");
		}

	function pauseMusic()
		{
			if (!MusicPlayer.paused)
				{
					MusicPlayer.pause();
				}
			PlayButton.value = "Play";
			PlayButton.removeEventListener("click", pauseMusic);
			PlayButton.addEventListener("click", playMusic);
			localStorage.setItem("IsPlaying", 0);
			GetIsPlaying = localStorage.getItem("IsPlaying");
			console.log("Music has been paused.");
		}
		
	function checkControls()
		{
			if (PlaylistCount == 0)
				{
					PreviousSong.disabled = true;
				}
			else
				{
					PreviousSong.disabled = false;
				}
			if (PlaylistCount == Playlist.length-1)
				{
					NextSong.value = ">>+";
				}
			else
				{
					NextSong.value = ">>|";
				}
			if (GetRepeatMode == "1")
				{
					RepeatModeCheck.checked = true;
				}
			else
				{
					RepeatModeCheck.checked = false;
				}
			if (GetShuffleMode == "1")
				{
					ShuffleModeCheck.checked = true;
				}
			else
				{
					ShuffleModeCheck.checked = false;
				}
			if (GetLoopMode == "1")
				{
					LoopModeCheck.checked = true;
				}
			else
				{
					LoopModeCheck.checked = false;
				}
			if (GetThemeMode == "1")
				{
					ThemeModeCheck.checked = true;
				}
			else
				{
					ThemeModeCheck.checked = false;
				}
				
			if (CurrentPlayback.textContent == "LOAD" && TotalPlayback.textContent == "ING" || CurrentPlayback.textContent == "ERR" && TotalPlayback.textContent == "OR!")
				{
					PlayButton.disabled = true;
					PlayTrack.disabled = true;
				}
			else
				{
					PlayButton.disabled = false;
					PlayTrack.disabled = false;
				}

			loopMode(0);
			repeatMode(0);
			shuffleMode(0);
			themeMode(0);
			ListenedSongs.textContent = PlayedAllSongsStorage.length;
			VolumeSlider.value = Number(GetCurrentVolume);
			setVolume();
			checkPlay();
		}
		
	function checkError(MediaError)
		{
			if (MediaError == 1)
				{
					CurrentPlayback.textContent = "ERR";
					TotalPlayback.textContent = "OR!";
					PlayTimeCurrent.className = "PlayTimeCurrent"+CurrentTheme+" PlayTimeCurrentError";
					PlayTimeTotal.className = "PlayTimeTotal"+CurrentTheme+" PlayTimeTotalError";
					PlayTrack.value = 0;
					ErrorCheck = 1;
				}
			else
				{
					PlayTimeCurrent.className = "PlayTimeCurrent PlayTimeCurrent"+CurrentTheme;
					PlayTimeTotal.className = "PlayTimeCurrent PlayTimeTotal"+CurrentTheme;
					ErrorCheck = 0;
				}
			checkControls(1);
		}
		
	function checkPlay()
		{
			if (GetIsPlaying == "1")
				{
					playMusic();
				}
		}
		
	function setPlayTime()
		{
			MusicPlayer.currentTime = Number(GetSongPlaybackTime);
		}
		
	function resetPlayTime()
		{
			MusicPlayer.currentTime = 0;
			localStorage.setItem("SongPlaybackTime", MusicPlayer.currentTime);
		}
		
	function selectSong()
		{
			SongID = this.id.replace('-Selected', '');
			CheckRepeatedSong = Playlist.indexOf(SongID);
			checkIfSongNotListened();
			Playlist.push(SongID);
			localStorage.setItem("PlaylistStorage", Playlist);
			PlaylistCount = Playlist.length-1;
			localStorage.setItem("PlaylistCounter", PlaylistCount);
			setSong(1);
			checkError(0);
			checkControls();
		}
		
	function musicEnded()
		{
			if (RepeatMode != 1)
				{
					songNumber();
				}
			setSong(1);
			checkControls();
		}
		
	function playNextSong()
		{
			songNumber();
			setSong(1);
			checkControls();
		}
	
	function playPreviousSong()
		{
			if (PlaylistCount != 0)
				{
					PlaylistCount--;
				}
			localStorage.setItem("PlaylistCounter", PlaylistCount);
			setSong(1);
			checkControls();
		}
		
	function songNumber()
		{
			if (PlaylistCount >= Playlist.length-1)
				{
					if (LoopMode == 0)
						{
							if (ShuffleMode == 0)
								{
									SongNumber = Playlist.indexOf(PlaylistCount);
									SongNumber++;
									SongName = TotalSongs[SongNumber];
									CheckRepeatedSong = Playlist.indexOf(SongName);
									checkIfSongNotListened();
									while (CheckRepeatedSong != -1)
										{
											SongNumber++;
											SongName = TotalSongs[SongNumber];
											CheckRepeatedSong = Playlist.indexOf(SongName);
											checkIfSongNotListened();
											if (PlayedAllSongsStorage.length == TotalSongs.length)
												{
													break;
												}
										}
								}
							else
								{
									SongNumber = Math.floor((Math.random() * LastSong));
									SongName = TotalSongs[SongNumber];
									CheckRepeatedSong = Playlist.indexOf(SongName);
									checkIfSongNotListened();

									while (CheckRepeatedSong != -1)
										{
											SongNumber = Math.floor((Math.random() * LastSong));
											SongName = TotalSongs[SongNumber];
											CheckRepeatedSong = Playlist.indexOf(SongName);
											checkIfSongNotListened();
											if (PlayedAllSongsStorage.length == TotalSongs.length)
												{
													break;
												}
										}
								}
						}
					else
						{
							if (ShuffleMode == 0)
								{
									SongNumber = Playlist.indexOf(PlaylistCount);
									SongNumber++;
									SongName = TotalSongs[SongNumber];
									CheckRepeatedSong = Playlist.indexOf(SongName);
									checkIfSongNotListened();
								}
							else
								{
									SongNumber = Math.floor((Math.random() * LastSong) + 1);
									SongName = TotalSongs[SongNumber];
									CheckRepeatedSong = Playlist.indexOf(SongName);
									checkIfSongNotListened();
								}
						}

					Playlist.push(SongName);
					localStorage.setItem("PlaylistStorage", Playlist);
				}
			PlaylistCount++;
			localStorage.setItem("PlaylistCounter", PlaylistCount);
		}
		
	function checkIfSongNotListened()
		{
			if (CheckRepeatedSong == -1)
				{
					PlayedAllSongsStorage.push(SongName);
					localStorage.setItem("PlayedAllSongsStorage", PlayedAllSongsStorage);
				}
		}
		
	function setVolume()
		{
			var GetVolume = VolumeSlider.value;
			localStorage.setItem("CurrentVolume", GetVolume);
			GetCurrentVolume = localStorage.getItem("CurrentVolume");
			if (VolumeSlider.value == 100)
				{
					GetVolume = "1.0";
				}
			else if (VolumeSlider.value < 10)
				{
					GetVolume = "0.0"+VolumeSlider.value;
				}
			else if (VolumeSlider.value == 0)
				{
					GetVolume = 0;
				}
			else
				{
					GetVolume = "0."+VolumeSlider.value;
				}
				
			if (VolumeSlider.value == 100)
				{
					VolumeBar5.style.visibility = "visible";
					VolumeBar4.style.visibility = "visible";
					VolumeBar3.style.visibility = "visible";
					VolumeBar2.style.visibility = "visible";
					VolumeBar1.style.visibility = "visible";
					VolumeX.style.visibility = "hidden";
				}
			else if (VolumeSlider.value > 75 && VolumeSlider.value < 100)
				{
					VolumeBar5.style.visibility = "hidden";
					VolumeBar4.style.visibility = "visible";
					VolumeBar3.style.visibility = "visible";
					VolumeBar2.style.visibility = "visible";
					VolumeBar1.style.visibility = "visible";
					VolumeX.style.visibility = "hidden";
				}
			else if (VolumeSlider.value > 50 && VolumeSlider.value <= 75)
				{
					VolumeBar5.style.visibility = "hidden";
					VolumeBar4.style.visibility = "hidden";
					VolumeBar3.style.visibility = "visible";
					VolumeBar2.style.visibility = "visible";
					VolumeBar1.style.visibility = "visible";
					VolumeX.style.visibility = "hidden";
				}
			else if (VolumeSlider.value > 25 && VolumeSlider.value <= 50)
				{
					VolumeBar5.style.visibility = "hidden";
					VolumeBar4.style.visibility = "hidden";
					VolumeBar3.style.visibility = "hidden";
					VolumeBar2.style.visibility = "visible";
					VolumeBar1.style.visibility = "visible";
					VolumeX.style.visibility = "hidden";
				}
			else if (VolumeSlider.value > 0 && VolumeSlider.value <= 25)
				{
					VolumeBar5.style.visibility = "hidden";
					VolumeBar4.style.visibility = "hidden";
					VolumeBar3.style.visibility = "hidden";
					VolumeBar2.style.visibility = "hidden";
					VolumeBar1.style.visibility = "visible";
					VolumeX.style.visibility = "hidden";
				}
			else
				{
					VolumeBar5.style.visibility = "hidden";
					VolumeBar4.style.visibility = "hidden";
					VolumeBar3.style.visibility = "hidden";
					VolumeBar2.style.visibility = "hidden";
					VolumeBar1.style.visibility = "hidden";
					VolumeX.style.visibility = "visible";
					VolumeX.textContent = "X";
				} 
				
			MusicPlayer.volume = GetVolume;
			setVolumeWidth(0);
			VolumeNumber.textContent = VolumeSlider.value;
		}
		
	function setVolumeWidth(Animated)
		{
			if (Animated == 0)
				{
					VolumeFill.style.transition = "width 0s";
					VolumeThumb.style.transition = "left 0s";
				}
			VolumeFill.style.width = VolumeSlider.value+"%";
			VolumeThumb.style.left = VolumeSlider.value+"%";
		}
		
	function loading()
		{
			CurrentPlayback.textContent = "LOAD";
			TotalPlayback.textContent = "ING";
			PlayTrackFill.style.width = "0%";
			PlayTrackThumb.style.left = "0%";
		}
		
	function getPlayTime()
		{	
			if (ErrorCheck == 0)
				{	
					localStorage.setItem("SongPlaybackTime", MusicPlayer.currentTime);
					PlayTime = parseInt(MusicPlayer.currentTime);
					PlayEnd = parseInt(MusicPlayer.duration);
					PlayTilEnd = PlayEnd - PlayTime;
					PlaySecondDown = PlayTilEnd % 60;
					PlayMinuteDown = Math.floor(PlayTilEnd / 60) % 60;
					PlaySecondDown = (PlaySecondDown < 10) ? "0"+PlaySecondDown: PlaySecondDown;
					TotalPlayback.textContent = "-"+PlayMinuteDown+":"+PlaySecondDown;
					PlaySecondUp = parseInt(PlayTime % 60);
					PlayMinuteUp = parseInt((PlayTime / 60) % 60);
					PlaySecondUp = (PlaySecondUp < 10) ? "0"+PlaySecondUp: PlaySecondUp;
					CurrentPlayback.textContent = PlayMinuteUp+":"+PlaySecondUp;
				
					if (CheckInput == 0)
						{
							PlayTrack.value = (100 / PlayEnd) * PlayTime;
							PlayTrackFill.style.width = PlayTrack.value+"%";
							PlayTrackThumb.style.left = PlayTrack.value+"%";
						}

			CheckInput = 0;
				}
		}
	
	function seekMusic()
		{
			CheckInput = 1;
			PlayTime = Math.round(MusicPlayer.currentTime);
			PlayEndTime = PlayEnd / 100;
			MusicPlayer.currentTime = PlayTrack.value * PlayEndTime;
			PlayTrackThumb.style.left = PlayTrack.value+"%";
			PlayTrackFill.style.width = PlayTrack.value+"%";
		}
		
	function clearPlaylist()
		{
			localStorage.removeItem("PlaylistStorage");
			localStorage.removeItem("PlayedAllSongsStorage");
			Playlist = [SongName];
			PlayedAllSongsStorage = [SongName];
			localStorage.setItem("PlaylistStorage", Playlist);
			localStorage.setItem("PlayedAllSongsStorage", PlayedAllSongsStorage);
			PlaylistCount = Playlist.length-1;
			localStorage.setItem("PlaylistCounter", PlaylistCount);
			checkControls();
			console.log("Playlist was cleared! Playlist now has "+Playlist.length+" song. "+Playlist); 
		}
		
	function scalePlayer(Scale)
		{
			
			if (Scale == 1)
				{
					MediaPlayerSection.className = "MediaPlayerSection MediaPlayerSection"+CurrentTheme;
					ContentShade.className = "ContentShade ContentShade"+CurrentTheme;
			
					if (IsPortable == 1)
						{
							window.resizeTo(330, 250);
						}
					
					localStorage.setItem("SavedScale", 1)
					ScaleNumber = localStorage.getItem("SavedScale");
					console.log("Player scaled to x1.");
				}

			if (Scale == 2)
				{
					MediaPlayerSection.className = "MediaPlayerSection MediaPlayerSection"+CurrentTheme+" MediaPlayerSectionScaledx2";
					ContentShade.className = "ContentShade ContentShade"+CurrentTheme+" ContentShadeActivex2";
			
					if (IsPortable == 1)
						{
							window.resizeTo(630, 395);
						}
						
					localStorage.setItem("SavedScale", 2)
					ScaleNumber = localStorage.getItem("SavedScale");
					console.log("Player scaled to x2.");
				}
				
			if (Scale == 3)
				{
					MediaPlayerSection.className = "MediaPlayerSection MediaPlayerSection"+CurrentTheme+" MediaPlayerSectionScaledx3";
					ContentShade.className = "ContentShade ContentShade"+CurrentTheme+" ContentShadeActivex3";
			
					if (IsPortable == 1)
						{
							window.resizeTo(925, 565);
						}
						
					localStorage.setItem("SavedScale", 3)
					ScaleNumber = localStorage.getItem("SavedScale");
					console.log("Player scaled to x3.");
				}

			if (Scale == 4)
				{
					MediaPlayerSection.className = "MediaPlayerSection MediaPlayerSection"+CurrentTheme+" MediaPlayerSectionScaledx4";
					ContentShade.className = "ContentShade ContentShade"+CurrentTheme+" ContentShadeActivex4";
			
					if (IsPortable == 1)
						{
							window.resizeTo(1225, 720);
						}
						
					localStorage.setItem("SavedScale", 4)
					ScaleNumber = localStorage.getItem("SavedScale");
					console.log("Player scaled to x4.");
				}
		}
		
	function resetPlayerSize()
		{
			if (ScaleNumber != 4)
				{
					scalePlayer(1);
				}
		}

	function loopMode(LogToConsole)
		{
			if (LoopModeCheck.checked == true)
				{
					LoopMode = 1;
					localStorage.setItem("LoopModeCheck", 1);
					GetLoopMode = localStorage.getItem("LoopModeCheck");
					if (LogToConsole != 0)
						{
							console.log("Loop Mode is now active.");
						}
				}
			else
				{
					LoopMode = 0;
					localStorage.setItem("LoopModeCheck", 0);
					GetLoopMode = localStorage.getItem("LoopModeCheck");
					if (LogToConsole != 0)
						{
							console.log("Loop Mode is now disabled.");
						}
				}
		}
		
	function shuffleMode(LogToConsole)
		{
			if (ShuffleModeCheck.checked == true)
				{
					ShuffleMode = 1;
					localStorage.setItem("ShuffleModeCheck", 1);
					GetShuffleMode = localStorage.getItem("ShuffleModeCheck");
					if (LogToConsole != 0)
						{
							console.log("Shuffle Mode is now active.");
						}
				}
			else
				{
					ShuffleMode = 0;
					localStorage.setItem("ShuffleModeCheck", 0);
					GetShuffleMode = localStorage.getItem("ShuffleModeCheck");
					if (LogToConsole != 0)
						{
							console.log("Shuffle Mode is now disabled.");
						}
				}
		}
		
	function repeatMode(LogToConsole)
		{
			if (RepeatModeCheck.checked == true)
				{
					RepeatMode = 1;
					localStorage.setItem("RepeatModeCheck", 1);
					GetRepeatMode = localStorage.getItem("RepeatModeCheck");
					if (LogToConsole != 0)
						{
							console.log("Repeat Mode is now active.");
						}
					
				}
			else
				{
					RepeatMode = 0;
					localStorage.setItem("RepeatModeCheck", 0);
					GetRepeatMode = localStorage.getItem("RepeatModeCheck");
					if (LogToConsole != 0)
						{
							console.log("Repeat Mode is now disabled.");
						}
				}
		}
		
	function themeMode(LogToConsole)
		{
			if (ThemeModeCheck.checked == true)
				{
					ThemeMode = 1;
					localStorage.setItem("ThemeModeCheck", 1);
					GetThemeMode = localStorage.getItem("ThemeModeCheck");
					if (LogToConsole != 0)
						{
							console.log("Theme Mode is now active.");
						}
				}
			else
				{
					ThemeMode = 0;
					localStorage.setItem("ThemeModeCheck", 0);
					GetThemeMode = localStorage.getItem("ThemeModeCheck");
					if (LogToConsole != 0)
						{
							console.log("Theme Mode is now disabled.");
						}
				}
		}
		
	function scrollToPlaying(OffSet)
		{
			SongSelectorID = document.getElementById(Playlist[PlaylistCount]+"-Selected");
			SongSelection.scrollTop = SongSelectorID.offsetTop - OffSet;
		}
		
	function portableMode()
		{
			window.open("Portable Player.html", "", "directories = no, menubar = no, scrollbars = no, status = no, toolbar = no, location = no");
			document.getElementById("HiddenPlayerContainer").innerHTML = "";
			document.getElementById("MediaPlayerContainer").innerHTML = "Please refresh the page to get the media player back here!!";
			ContentShade.className = "ContentShade";
			
		}
		
	/* Play Themes */
	
		function changeTheme()
			{
				
				localStorage.setItem("SavedTheme", CurrentTheme);
				scalePlayer(ScaleNumber);
				SongTrack.className = "SongTrack SongTrack"+CurrentTheme+" PlayerSection"+CurrentTheme;
				VolumeControlTable.className = "VolumeControl PlayerSection"+CurrentTheme;
				SongCount.className = "SongCount PlayerSection"+CurrentTheme;
				CheckboxesSection.className = "CheckboxesSection PlayerSection"+CurrentTheme;
				PlayerSize.className = "PlayerSize PlayerText"+CurrentTheme;
				CurrentlyPlaying.className = "CurrentlyPlaying PlayerText"+CurrentTheme;
				PlayTimeCurrent.className = "PlayTimeCurrent PlayTimeCurrent"+CurrentTheme;
				PlayTimeTotal.className = "PlayTimeCurrent PlayTimeTotal"+CurrentTheme;
				PlayTrackLength.className = "RangeLength RangeLength"+CurrentTheme;
				PlayTrackFill.className = "RangeFill RangeFill"+CurrentTheme;
				PlayTrackThumb.className = "RangeThumb RangeThumb"+CurrentTheme;
				VolumeLength.className = "RangeLength RangeLength"+CurrentTheme;
				VolumeFill.className = "RangeFill RangeFill"+CurrentTheme;
				VolumeThumb.className = "RangeThumb RangeThumb"+CurrentTheme;
				VolumeBody.className = "VolumeBody VolumeBody"+CurrentTheme;
				VolumeArc.className = "VolumeArc VolumeArc"+CurrentTheme;
				VolumeBar1.className = "VolumeBar1 VolumeBar1"+CurrentTheme;
				VolumeBar2.className = "VolumeBar2 VolumeBar2"+CurrentTheme;
				VolumeBar3.className = "VolumeBar3 VolumeBar3"+CurrentTheme;
				VolumeBar4.className = "VolumeBar4 VolumeBar4"+CurrentTheme;
				VolumeBar5.className = "VolumeBar5 VolumeBar5"+CurrentTheme;
				VolumeX.className = "VolumeX VolumeX"+CurrentTheme;
				PreviousSong.className = "PlayButtons"+CurrentTheme;
				PlayButton.className = "PlayButtons"+CurrentTheme;
				NextSong.className = "PlayButtons"+CurrentTheme;
				RepeatModeCheck.className = "PlayerCheckboxes"+CurrentTheme;
				ShuffleModeCheck.className = "PlayerCheckboxes"+CurrentTheme;
				LoopModeCheck.className = "PlayerCheckboxes"+CurrentTheme;
				ThemeModeCheck.className = "PlayerCheckboxes"+CurrentTheme;
				PortablePlayerLink.className = "PlayerLink"+CurrentTheme;
				ClearPlaylistLink.className = "PlayerLink"+CurrentTheme;
				ScaleLinkx1.className = "PlayerLink"+CurrentTheme;
				ScaleLinkx2.className = "PlayerLink"+CurrentTheme;
				ScaleLinkx3.className = "PlayerLink"+CurrentTheme;
				ScaleLinkx4.className = "PlayerLink"+CurrentTheme;
				VolumeCell.className = "VolumeCell VolumeCell"+CurrentTheme;
				SongSelection.className = "SongList SongList"+CurrentTheme;
				SongCategory.className = "SongCategory SongCategory"+CurrentTheme;
				ArrowUp.className = "ArrowUp ArrowUp"+CurrentTheme;
				ArrowDown.className = "ArrowDown ArrowDown"+CurrentTheme;
				ThemeSelection.className = "ThemeSelection SongList"+CurrentTheme;
				SelectTheme.className = "SelectTheme"+CurrentTheme;
				
				for (count = 0; count < Themes.length; count++)
					{
						document.getElementById(Themes[count].replace(' ', '_')).className = "ThemeOption Song"+CurrentTheme;
					}
					
				for (Song = 0; Song < LastSong; Song++)
					{	
						document.getElementById(TotalSongs[Song]+"-Selected").className = "Song"+CurrentTheme;
					}
					
				console.log("Theme was set to "+CurrentTheme+".");
				
			}


/* F-List Icon Search */
	
	function searchIcon()
		{
			
			Icon.src = "https://static.f-list.net/images/avatar/" + SearchInput.value.toLowerCase() + ".png";
			IconLink.href = "https://www.f-list.net/c/" + SearchInput.value;
			EiconLink.href = "https://static.f-list.net/images/eicon/" + SearchInput.value + ".gif";
			Eicon.src = "https://static.f-list.net/images/eicon/" + SearchInput.value.toLowerCase() + ".gif";
			IconMatch.textContent = "[icon]" + SearchInput.value + "[/icon]";
			EiconMatch.textContent = "[eicon]" + SearchInput.value + "[/eicon]";
		}
		
	function fListIconSearch ()
		{
			window.open("F-List Icon Search.html", "", "directories = no, menubar = no, scrollbars = no, status = no, toolbar = no, location = no, width = 491, height = 343, left = 330, top = 325");
		}
		
		
/* HTML Preview */
	
	
	function previewHTML()
		{		
			window.frames[0].document.body.innerHTML = HTMLEditBox.value;
		}
		
	function hTMLPreview ()
		{
			window.open("HTML Preview.html", "", "directories = no, menubar = no, scrollbars = no, status = no, toolbar = no, location = no, width = 841, height = 471, left = 330, top = 325");
		}
		
/* Stopwatch */

	function stopWatch ()
		{
			window.open("Stopwatch.html", "", "directories = no, menubar = no, scrollbars = no, status = no, toolbar = no, location = no, width = 525, height = 210, left = 330, top = 325");
		}
