	/* Variables */
		/* Main Page & Portable Player */
			var MediaPlayerContainer = document.getElementById("MediaPlayerContainer");
			var MediaPlayerSection = document.getElementById("MediaPlayerSection");
			var MediaPlayerRefresh = document.getElementById("MediaPlayerRefresh");
			var SongTrack = document.getElementById("SongTrack");
			var SongListTrack = document.getElementById("SongListTrack");
			var MusicPlayer = document.getElementById("BackgroundMusic");
			var SongCount = document.getElementById("SongCount");
			var ChecboxesSection = document.getElementById("CheckboxesSection");
			var PlayerSize = document.getElementById("PlayerSize");
			var CurrentlyPlaying = document.getElementById("CurrentlyPlaying");
			var TroubleshootContainer = document.getElementById("TroubleshootContainer");
			var Troubleshoot = document.getElementById("Troubleshoot");
			var ClearPlaylistContainer = document.getElementById("ClearPlaylistContainer");
			var TroubleshootMessage = document.getElementById("TroubleshootMessage");
			var ClearPlaylistMessage = document.getElementById("ClearPlaylistMessage");
			var ShareContainer = document.getElementById("ShareContainer");
			var ShareCircle1 = document.getElementById("ShareCircle1");
			var ShareConnectingLine1 = document.getElementById("ShareConnectingLine1");
			var ShareCircle2 = document.getElementById("ShareCircle2");
			var ShareConnectingLine2 = document.getElementById("ShareConnectingLine2");
			var ShareCircle3 = document.getElementById("ShareCircle3");
			var ShareIcon = document.getElementById("ShareIcon");
			var HiddenShareText = document.getElementById("HiddenShareText");
			var ShareMessage = document.getElementById("ShareMessage");
			var PlayButton = document.getElementById("PlayButton");
			var NextSong = document.getElementById('NextSong');
			var PreviousSong = document.getElementById('PreviousSong');
			var VolumeCell = document.getElementById('VolumeCell');
			var SongListCellMobile = document.getElementById("SongListCellMobile");
			var SongListRowMobile = document.getElementById("SongListRowMobile");
			var SongListContainer = document.getElementById('SongListContainer');
			var SongSelection = document.getElementById('SongSelection');
			var SearchContainer = document.getElementById('SearchContainer');
			var SearchIcon = document.getElementById('SearchIcon');
			var SearchHandle = document.getElementById('SearchHandle');
			var SearchCircle = document.getElementById('SearchCircle');
			var SongSearch = document.getElementById('SongSearch');
			var VolumeSlider = document.getElementById('VolumeSlider');
			var VolumeNumber = document.getElementById('VolumeNumber');
			var PlayTimeCurrent = document.getElementById('PlayTimeCurrent');
			var CurrentPlayback = document.getElementById('CurrentPlayback');
			var PlayTrack = document.getElementById('PlayTrack');
			var PlayTimeTotal = document.getElementById('PlayTimeTotal');
			var TotalPlayback = document.getElementById('TotalPlayback');
			var OptionInfo = document.getElementById("OptionInfo");
			var ShuffleOption = document.getElementById("ShuffleOption");
			var ShuffleModeCheck = document.getElementById("ShuffleModeCheck");
			var RepeatOption = document.getElementById("RepeatOption");
			var RepeatModeCheck = document.getElementById("RepeatModeCheck");
			var LoopOption = document.getElementById("LoopOption");
			var LoopModeCheck = document.getElementById("LoopModeCheck");
			var ThemeOption = document.getElementById("ThemeOption");
			var ThemeModeCheck = document.getElementById("ThemeModeCheck");
			var CurrentSongContainer = document.getElementById("CurrentSongContainer");
			var CurrentSong = document.getElementById("CurrentSong");
			var SongInformation = document.getElementById("SongInformation");
			var SongScrollable = document.getElementById("SongScrollable");		
			var SongArrowUp = document.getElementById("SongArrowUp");
			var ScrollSongBar = document.getElementById("ScrollSongBar");
			var ScrollSongRange = document.getElementById("ScrollSongRange");
			var SongArrowDown = document.getElementById("SongArrowDown");
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
			var ThemeSelectionContainer = document.getElementById("ThemeSelectionContainer");
			var ThemeSelectionOuter = document.getElementById("ThemeSelectionOuter");
			var ThemeSelection = document.getElementById("ThemeSelection");
			var ThemeArrowUp = document.getElementById("ThemeArrowUp");
			var ThemeArrowDown = document.getElementById("ThemeArrowDown");
			var GetSongPlaybackTime = localStorage.getItem("SongPlaybackTime");
			var GetSavedPlaylist = localStorage.getItem("PlaylistStorage");
			var GetSavedSongDates = JSON.parse(localStorage.getItem("SavedSongDates"));
			var GetSavedThemeDates = JSON.parse(localStorage.getItem("SavedThemeDates"));
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
			var GetSavedUsedThemes = localStorage.getItem("SavedUsedThemes");
			var ScaleNumber = localStorage.getItem("SavedScale");

		/* JavaScript */
		
			var HostURL = "http://mlplayer.000webhostapp.com/";
			var PortableWindow;
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
			var SongDates = {};
			var ThemeDates = {};
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
							"Twilight Sparkle",
							"Derpy",
							"DJ-PON3",
							"Princess Luna"
						];
			var UsedThemes = [];
			var SongID;
			var PlaySecondUp;
			var PlayMinuteUp;
			var PlaySecondDown;
			var PlayMinuteDowm;
			var PlayMinuteCounter;
			var PlayDuration;
			var PlayTime;
			var PlayTimeLeft;
			var PlayEndTime;
			var SeekMusic;
			var SongDuration;
			var SongTime;
			var SongSelectorID;
			var SongOption;
			var MouseOverSong;
			var PlayTrackMouseDown;
			var LastSong;
			var ThemeCount;
			var SongInfoFunction;
			var SongInfoNumber = 2;
			var SongScrollUpFunction;
			var SongScrollDownnFunction;
			var ThemeScrollUpFunction;
			var ThemeScrollDownFunction;
			var MusicSeekFunction;
			var TransitionSpeedFunction;
			var TransitionVolumeFunction;
			var CurrentDate = new Date();
			var NewHTML = " <sup>NEW</sup>";
			var NewText = "NEW";
			var CurrentURL = window.location.href.substr(window.location.href.lastIndexOf('/')+1).toLowerCase();
			var FullURL = window.location.href;
			var AlbumLinks;
			var MouseOverSongList;
			if (CurrentURL.search("index.html") != -1 || CurrentURL == "")
				{
					var IsMain = 1;
				}
			else if (CurrentURL.search("portable.html") != -1)
				{
					var IsPortable = 1;
				}
			else if (CurrentURL.search("mobile.html") != -1)
				{
					var IsMobile = 1;
					IsMain = 0;
				}
			
	function initialSetup()
		{
			if (IsMain == 1)
				{
			localStorage.setItem("SongList", MusicPlayer.innerHTML);
				}
			
			if (GetSavedUsedThemes != null)
				{
					UsedThemes = GetSavedUsedThemes.split(",");
				}
				
			CurrentDate.setDate(CurrentDate.getDate() - 7);
			
			if (GetSavedThemeDates != null)
				{
					ThemeDates = GetSavedThemeDates;
				}
			else
				{
					GetSavedThemeDates = ThemeDates;
				}		
						
			Themes.sort();
			
			for (count = -1; count < Themes.length; count++)
				{
					var ThemeOption = document.createElement('div');
					if (count == -1)
						{
							ThemeOption.setAttribute("ID", "SelectTheme");
							ThemeOption.textContent = "Select Theme...";
							ThemeSelection.appendChild(ThemeOption);
							SelectTheme = document.getElementById("SelectTheme");
						}
					else
						{
							ThemeName = Themes[count];
							if (GetSavedThemeDates[ThemeName] != null)
								{
									ThemeOption.setAttribute("data-dateadded", GetSavedThemeDates[ThemeName]);
								}
							else
								{
									ThemeOption.setAttribute("data-dateadded", Date());
									ThemeDates[ThemeName] = ThemeOption.dataset.dateadded;
								}
						
							if (CurrentDate < new Date(ThemeOption.dataset.dateadded) && UsedThemes.indexOf(Themes[count]) == -1)
								{
									ThemeOption.innerHTML = Themes[count]+NewHTML;
								}
							else
								{
									ThemeOption.innerHTML = Themes[count];
								}
									ThemeOption.setAttribute("ID", Themes[count].replace(' ', '_'));
									ThemeSelection.appendChild(ThemeOption);
									window[Themes[count].replace(' ', '') + "Theme"] = document.getElementById(Themes[count].replace(' ', '_'));
						}
						
					localStorage.setItem("SavedThemeDates", JSON.stringify(ThemeDates));
				}
			assignEvents();
			preliminaryChecks();
			changeTheme();
			setSong();
			history.replaceState(null, null, CurrentURL.substring(0, CurrentURL.indexOf("?")));
			setTimeout(function() { scrollToPlaying(6, 1); }, 1000);
			musicSeek();
			if (IsMain == 1 && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
				{
					window.location = "Mobile.html";
				}
			SongInformation.textContent = document.getElementById(SongName).dataset.series;

			if (IsMobile == 1)
				{
					ClearPlaylistMessage.textContent = "Clear the playlist. To cancel, move your finger away and let go."
					TroubleshootMessage.textContent = "Something is not working as it should? Tap this icon to reset everything back to default. Keep in mind that this will clear your playlist!! The page is going to be reloaded as well. To cancel, move your finger away and let go."
					ShareMessage.textContent = "Copy song URL to clipboard. To cancel, move your finger away and let go.";
					changeSongAndThemeHeight();
				}
			else
				{
					TroubleshootMessage.textContent = "Something is not working as it should? Click this icon to reset everything back to default. Keep in mind that this will clear your playlist!! The page is going to be reloaded as well."
					ShareMessage.textContent = "Copy song URL to clipboard.";
				}
				
			initialSongInfo();
			checkControls();
			if (IsMobile != 1)
				{
					setTimeout (function() { MediaPlayerSection.style.transition = "opacity 2s"; MediaPlayerSection.style.opacity = "1"; }, 700);
				}
		}
		
	function initialSongInfo()
		{
			SongInfoFunction = setInterval(setSongInformation, 6000);
		}
		
	function scrollSongListUp()
		{
			SongScrollUpFunction = setInterval(scrollSongUp, 0001);
		}
		
	function scrollSongListDown()
		{
			SongScrollDownFunction = setInterval(scrollSongDown, 0001);
		}
		
	function scrollThemeListUp()
		{
			ThemeScrollUpFunction = setInterval(scrollThemeUp, 0050);
		}
		
	function scrollThemeListDown()
		{
			ThemeScrollDownFunction = setInterval(scrollThemeDown, 0050);
		}
		
	function musicSeek()
		{
			MusicSeekFunction = setInterval(getPlayTime, 1000);
		}
			
	function assignEvents()
		{
			/* Main & Portable Player */
				
				if (IsMobile != 1)
					{
						if (IsMain == 1)
							{
								window.addEventListener("load", function() { PortableWindow.close(); });
							}
						RepeatOption.addEventListener ("mouseover", function() { moreInfo("Repeat"); });
						ShuffleOption.addEventListener ("mouseover", function() { moreInfo("Shuffle"); });
						LoopOption.addEventListener ("mouseover", function() { moreInfo("Loop"); });
						ThemeOption.addEventListener ("mouseover", function() { moreInfo("Theme"); });
						RepeatModeCheck.addEventListener("click", repeatMode);
						ShuffleModeCheck.addEventListener("click", shuffleMode);
						LoopModeCheck.addEventListener("click", loopMode); 
						ThemeModeCheck.addEventListener("click", themeMode); 
						ClearPlaylistLink.addEventListener("click", clearPlaylist);
						ScaleLinkx1.addEventListener("click", function() { scalePlayer(1) });
						ScaleLinkx2.addEventListener("click", function() { scalePlayer(2) });
						ScaleLinkx3.addEventListener("click", function() { scalePlayer(3) });
						ScaleLinkx4.addEventListener("click", function() { scalePlayer(4) });
						SongListContainer.addEventListener("mouseenter", checkIfNotChangeStyle); 
						SongListContainer.addEventListener("mouseenter", function() { setTimeout(function() { scrollToPlaying(0); }, 0001); MouseOverSongList = 1; });
						SongListContainer.addEventListener("mouseleave", function() { setTimeout(function() { scrollToPlaying(6, 1); }, 0100); MouseOverSongList = 0; SongSearch.textContent = null; SongSearch.blur(); searchSong(); });
						SearchIcon.addEventListener("click", focusSongSearchField);
						SearchContainer.addEventListener("mouseenter", function() { setTimeout(focusSongSearchField, 1000); });
						SongSearch.addEventListener("input", searchSong);
						SongSearch.addEventListener("keypress", checkSearchKey);
						SongListTrack.addEventListener("change", scrollSongList);
						SongListTrack.addEventListener("input", scrollSongList);
						PlayTrack.addEventListener("mousedown", function() { PlayTrackMouseDown = 1; });
						PlayTrack.addEventListener("mouseup", function() { PlayTrackMouseDown = 0; });
						PreviousSong.addEventListener("click", playPreviousSong);
						PlayButton.addEventListener("click", playMusic);
						NextSong.addEventListener("click", playNextSong);
						SongArrowUp.addEventListener ("click", scrollSongUp);
						SongArrowUp.addEventListener ("mousedown", scrollSongListUp);
						SongArrowUp.addEventListener ("mouseup", function() { clearInterval(SongScrollUpFunction); });
						SongArrowUp.addEventListener ("mouseleave", function() { clearInterval(SongScrollUpFunction); });
						SongArrowDown.addEventListener ("click", scrollSongDown);
						SongArrowDown.addEventListener ("mousedown", scrollSongListDown);
						SongArrowDown.addEventListener ("mouseup", function() { clearInterval(SongScrollDownFunction); });
						SongArrowDown.addEventListener ("mouseleave", function() { clearInterval(SongScrollDownFunction); });
						ThemeSelectionContainer.addEventListener("mouseleave", function() { setTimeout(function() { ThemeSelection.scrollTop = 0; }, 0001);});
						ThemeArrowUp.addEventListener ("click", scrollThemeUp);
						ThemeArrowUp.addEventListener ("mousedown", scrollThemeListUp);
						ThemeArrowUp.addEventListener ("mouseup", function() { clearInterval(ThemeScrollUpFunction); });
						ThemeArrowUp.addEventListener ("mouseleave", function() { clearInterval(ThemeScrollUpFunction); });
						ThemeArrowDown.addEventListener ("click", scrollThemeDown);
						ThemeArrowDown.addEventListener ("mousedown", scrollThemeListDown);
						ThemeArrowDown.addEventListener ("mouseup", function() { clearInterval(ThemeScrollDownFunction); });
						ThemeArrowDown.addEventListener ("mouseleave", function() { clearInterval(ThemeScrollDownFunction); });
						Troubleshoot.addEventListener("click", resetEverything);
						ShareIcon.addEventListener("mouseover", resetShareMessage);
						VolumeControlTable.addEventListener("mouseover", function() { setVolumeWidth(); });
					}
				else
					{
						var MatchOrientation = window.matchMedia("(orientation: landscape)");
						MatchOrientation.addListener(function() { SongSelection.style.height = "0"; changeSongAndThemeHeight(); });
						RepeatOption.addEventListener ("touchstart", function() { moreInfo("Repeat"); });
						ShuffleOption.addEventListener ("touchstart", function() { moreInfo("Shuffle"); });
						LoopOption.addEventListener ("touchstart", function() { moreInfo("Loop"); });
						ThemeOption.addEventListener ("touchstart", function() { moreInfo("Theme"); });
						RepeatOption.addEventListener ("touchend", resetOptionFunctionStyle);
						ShuffleOption.addEventListener ("touchend", resetOptionFunctionStyle);
						LoopOption.addEventListener ("touchend", resetOptionFunctionStyle);
						ThemeOption.addEventListener ("touchend", resetOptionFunctionStyle);
						RepeatModeCheck.addEventListener("click", repeatMode);
						ShuffleModeCheck.addEventListener("click", shuffleMode);
						LoopModeCheck.addEventListener("click", loopMode); 
						ThemeModeCheck.addEventListener("click", themeMode);
						PlayTrack.addEventListener("touchstart", function() { PlayTrackMouseDown = 1; });
						PlayTrack.addEventListener("touchend", function() { PlayTrackMouseDown = 0; });
						PreviousSong.addEventListener("touchend", playPreviousSong);
						PlayButton.addEventListener("touchend", playMusic);
						NextSong.addEventListener("touchend", playNextSong);
						SongArrowUp.addEventListener ("touchstart", scrollSongListUp);
						SongArrowUp.addEventListener ("touchend", function() { clearInterval(SongScrollUpFunction); });
						SongArrowDown.addEventListener ("touchstart", scrollSongListDown);
						SongArrowDown.addEventListener ("touchend", function() { clearInterval(SongScrollDownFunction); });
						ThemeArrowUp.addEventListener ("touchstart", scrollThemeListUp);
						ThemeArrowUp.addEventListener ("touchend", function() { clearInterval(ThemeScrollUpFunction); });
						ThemeArrowDown.addEventListener ("touchstart", scrollThemeListDown);
						ThemeArrowDown.addEventListener ("touchend", function() { clearInterval(ThemeScrollDownFunction); });
						Troubleshoot.addEventListener("touchstart", function () { showTroubleshootMessage(); Troubleshoot.addEventListener("touchend", resetEverything); });
						Troubleshoot.addEventListener("touchend", hideTroubleshootMessage);
						Troubleshoot.addEventListener("touchmove", hideTroubleshootMessage);
						Troubleshoot.addEventListener("touchmove", function() { Troubleshoot.removeEventListener("touchend", resetEverything); });
						ClearPlaylistContainer.addEventListener("touchstart", function () { showClearPlaylistMessage(); ClearPlaylistContainer.addEventListener("touchend", clearPlaylist); });
						ClearPlaylistContainer.addEventListener("touchend", hideClearPlaylistMessage);
						ClearPlaylistContainer.addEventListener("touchmove", hideClearPlaylistMessage);
						ClearPlaylistContainer.addEventListener("touchmove", function() { ClearPlaylistContainer.removeEventListener("touchend", clearPlaylist); });
						ShareIcon.addEventListener("touchstart", function() { ShareIcon.addEventListener("touchend", copySongURL);showShareMessage(); });
						ShareIcon.addEventListener("touchend", function() { setTimeout(hideShareMessageTimeout, 0001) });
						ShareIcon.addEventListener("touchmove", hideShareMessageTimeout);
						ShareIcon.addEventListener("touchmove", function() { ShareIcon.removeEventListener("touchend", copySongURL); });
						SearchIcon.addEventListener("touchend", focusSongSearchField);
						SongSearch.addEventListener("input", searchSong);
						SongSearch.addEventListener("keypress", checkSearchKey);
						SongSearch.addEventListener("blur", blurSongSearchField);
					}
					
				SongSelection.addEventListener("scroll", scrollSongBar);
				MusicPlayer.addEventListener("error", function() { checkError(1); });
				MusicPlayer.addEventListener("ended", musicEnded);
				MusicPlayer.addEventListener("canplay", function() { getPlayTime(1); });
				PlayTrack.addEventListener("change", function() { setTimeout(seekMusic, 0300); });
				PlayTrack.addEventListener("input", function() { setTimeout(seekMusic, 0300); });
				VolumeSlider.addEventListener("change", setVolume);
				VolumeSlider.addEventListener("input", setVolume);

				for (count = 0; count < Themes.length; count++)
					{
						document.getElementById(Themes[count].replace(' ', '_')).addEventListener("click", function() { CurrentTheme = this.id; changeTheme(); });
					}
					
				if (IsMain == 1)
					{
						PortablePlayerLink.addEventListener("click", portableMode);
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
						setRandomTheme();
					}
					
				if (ScaleNumber === null)
					{
						localStorage.setItem("SavedScale", 4);
						ScaleNumber = localStorage.getItem("SavedScale");
					}
					
				if (IsPortable == 1 || IsMobile == 1)
					{
						MusicPlayer.innerHTML = GetSongList;
					}

				LastSong = MusicPlayer.childElementCount;
				NumberOfSongs.textContent = MusicPlayer.childElementCount;
					
				buildSongList();
					
				if (CurrentURL.search(/\\?/g) != -1)
					{
						
						if (CurrentURL.search(/Song/i) != -1)
							{
								if (CurrentURL.indexOf('&') != -1)
									{
										var GetURLSong = CurrentURL.substr(CurrentURL.indexOf('song=')+5, CurrentURL.indexOf('&') - CurrentURL.indexOf('song=')-5);
									}
								else
									{
										var GetURLSong = CurrentURL.substr(CurrentURL.indexOf('song=')+5);
									}
								GetURLSong = GetURLSong.replace(/%27/g, "'").replace(/%20/g, "_");
								var TotalSongsLowerCase = TotalSongs.toString().toLowerCase();
								TotalSongsLowerCase = TotalSongsLowerCase.split(',');
								SongNumber = TotalSongsLowerCase.indexOf(GetURLSong.toLowerCase());
						
								if (SongNumber == -1)
									{
										alert("Sorry, but the song "+GetURLSong.replace(/_/g, ' ')+" was not found.");
										songPlaylistCheck();
									}
								else
									{
										if (GetSavedPlaylist != null)
											{
												Playlist = GetSavedPlaylist.split(",");
												PlayedAllSongsStorage = GetPlaylistAllSongs.split(",");
											}
									
										SongName = TotalSongs[SongNumber];				
										CheckRepeatedSong = Playlist.indexOf(SongName);
										checkIfSongNotListened();
										if (CheckRepeatedSong == -1)
											{
												Playlist.push(SongName);
												localStorage.setItem("PlaylistStorage", Playlist);
											}
										PlaylistCount = Playlist.indexOf(SongName);
										localStorage.setItem("PlaylistCounter", PlaylistCount);
										GetIsPlaying = 1;
										ScaleNumber = 4;
									}
							}
							else
							{
								songPlaylistCheck();
							}
							
						if (CurrentURL.search(/Theme/i) != -1)
							{
								var GetURLTheme = CurrentURL.substr(CurrentURL.lastIndexOf('theme=')+6);
								GetURLTheme = GetURLTheme.replace(/%27/g, "'").replace(/%20/g, " ").replace(/_/g, " ");
								var ThemesLowerCase = Themes.toString().toLowerCase();
								ThemesLowerCase = ThemesLowerCase.split(',');
								var TestTheme = ThemesLowerCase.indexOf(GetURLTheme.toLowerCase());
								
								if (TestTheme == -1)
									{
										alert("Sorry, but the theme "+GetURLTheme.replace(/_/g, ' ')+" was not found.");
									}
								else
									{
										CurrentTheme = Themes[TestTheme].replace(" ", "_");
										changeTheme();
									}
							}			
					}
					
				if (GetCurrentVolume === null)
					{
						localStorage.setItem("CurrentVolume", 100);
						GetCurrentVolume = localStorage.getItem("CurrentVolume");
					}
					
				if (GetSongPlaybackTime === null)
					{
						localStorage.setItem("SongPlaybackTime", 0);
						GetSongPlaybackTime = 0;
					}
			}
				
		function lowerTransitionSpeed(Speed)
			{
				PlayTrackFill.style.transition = Speed;
				PlayTrackThumb.style.transition = Speed;
				TransitionSpeedFunction = setTimeout(function() { PlayTrackFill.style.transition = null; PlayTrackThumb.style.transition = null; }, 1000);
			}
				
		function songPlaylistCheck()
			{
				if (GetSavedPlaylist === null)
					{
						SongNumber = Math.floor((Math.random() * LastSong));
						SongName = TotalSongs[SongNumber];
						CheckRepeatedSong = Playlist.indexOf(SongName);
						checkIfSongNotListened();
						Playlist.push(SongName);
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
			}
					
		function buildSongList()
			{			
				if (GetSavedSongDates != null)
					{
						SongDates = GetSavedSongDates;
					}
				else
					{
						GetSavedSongDates = SongDates;
					}
				
				for (Song = 0; Song < LastSong; Song++)
					{	
						SongName = MusicPlayer.children[Song].title.replace(/ /g, '_').replace(/,/g, '');
						MusicPlayer.children[Song].setAttribute("id", SongName);
						
						if (GetSavedSongDates[SongName] != null)
							{
								MusicPlayer.children[Song].setAttribute("data-dateadded", GetSavedSongDates[SongName]);
							}
						else
							{
								MusicPlayer.children[Song].setAttribute("data-dateadded", Date());
								SongDates[SongName] = MusicPlayer.children[Song].dataset.dateadded;
							}
							
						if (MusicPlayer.children[Song].dataset.series == null)
							{
								MusicPlayer.children[Song].setAttribute("data-series", "My Little Pony: Friendship is Magic");
							}
						if (MusicPlayer.children[Song].dataset.composer == null)
							{
								MusicPlayer.children[Song].setAttribute("data-composer", "Daniel Ingram");
							}
						if (MusicPlayer.children[Song].dataset.copyright == null)
							{
								MusicPlayer.children[Song].setAttribute("data-copyright", "Copyright \u00A9 Hasbro. All Rights Reserved.");
							}
							
						GeneratedID = document.getElementById(MusicPlayer.children[Song].id);
						GeneratedID.src = HostURL + "Media/" + GeneratedID.src.substr(GeneratedID.src.lastIndexOf('/') + 1);
						TotalSongs.push(SongName);
					}
					
				localStorage.setItem("SavedSongDates", JSON.stringify(SongDates));
				TotalSongs.sort();
				
				if (GetSavedPlaylist != null)
					{
						Playlist = GetSavedPlaylist.split(",");
					}
				
				for (Song = 0; Song < TotalSongs.length; Song++)
					{
						SongName = TotalSongs[Song];
						SongOption = document.createElement("Span");
						
						if (CurrentDate < new Date(document.getElementById(SongName).dataset.dateadded) && Playlist.indexOf(SongName) == -1 && SongOption.innerHTML.search(NewHTML) == -1)
							{
								SongOption.innerHTML = document.getElementById(SongName).title + NewHTML;
							}
						else
							{
								SongOption.innerHTML = document.getElementById(SongName).title;
							}

						SongOption.addEventListener("click", selectSong);
						SongOption.setAttribute("ID", SongName+"-Selected");
						SongOption.setAttribute("Class", "Song Song"+CurrentTheme);
						SongSelection.appendChild(SongOption);
					}
			}
				
		function setSong(NewSongCheck)
			{
				lowerTransitionSpeed("0.3s");
				SongName = Playlist[PlaylistCount];
				SongID = document.getElementById(SongName);
				SongSelectorID = document.getElementById(SongName+"-Selected");
				
				if (NewSongCheck == 1 || CurrentURL.search(/song/i) != -1)
					{
						MusicPlayer.removeEventListener("loadeddata", setPlayTime);
						resetPlayTime();
					}
				else
					{
						MusicPlayer.addEventListener("loadeddata", setPlayTime);
					}
					
				MusicPlayer.src = SongID.src;
						if (ThemeMode == 1)
							{
								setRandomTheme();
							}
				SongNumber = TotalSongs.indexOf(SongName);
				if (IsMobile != 1)
					{
						ShareContainer.removeEventListener("click", copySongURL);
						ShareContainer.addEventListener("click", copySongURL);
					}
				else
					{
						ShareIcon.removeEventListener("touchend", copySongURL);
						ShareIcon.addEventListener("touchend", copySongURL);
					}
				setTimeout(function() { scrollToPlaying(6, 1); }, 0300); 
				if (SongSelectorID.innerHTML.search(NewHTML) != -1)
					{
						UpdatedSongText = SongSelectorID.innerHTML.substring(0, SongSelectorID.innerHTML.lastIndexOf(" "));
						SongSelectorID.innerHTML = UpdatedSongText;
					}
				if (IsMobile == 1)
					{
						CurrentSong.textContent = SongSelectorID.textContent;
					}
				checkError(0);
				console.log("Song "+document.getElementById(SongName).title+" (Number "+(PlaylistCount+1)+" in playlist) was set. Updating Playlist: "+localStorage.getItem("PlaylistStorage").replace(/_/g, ' ').replace(/,/g, ', ')+"."+"\n"+"Total Songs in Playlist: "+Playlist.length+".");
			}
			
		function searchSong()
			{
				var SearchString = SongSearch.textContent.replace(/\s/g, "_").replace(/,/g, "").toLowerCase();
				
				for (Song = 0; Song < TotalSongs.length; Song++)
					{
						if (TotalSongs[Song].toLowerCase().search(SearchString) == -1)
							{
								document.getElementById(TotalSongs[Song]+"-Selected").style.display = "none";
							}
						else
							{
								document.getElementById(TotalSongs[Song]+"-Selected").style.display = null;
							}
					}
			}
			
		function focusSearchField(Focus)
			{
				if (IsMobile != 1)
					{
						if (Focus == 1)
							{
								SongSearch.focus();
								SearchIcon.removeEventListener("click", focusSongSearchField);
								SearchIcon.addEventListener("click", blurSongSearchField);
							}
						else
							{
								SongSearch.blur();
								SearchIcon.removeEventListener("click", blurSongSearchField);
								SearchIcon.addEventListener("click", focusSongSearchField);
							}
					}
				else
					{
						if (Focus == 1)
							{
								SongSearch.className = "SongSearchMobileTap SongSearch"+CurrentTheme;
								setTimeout(function() { SongSearch.focus(); }, 1000);
								SearchIcon.removeEventListener("touchend", focusSongSearchField);
								SearchIcon.addEventListener("touchend", blurSongSearchField);
							}
						else
							{
								SongSearch.className = "SongSearchMobile SongSearch"+CurrentTheme;
								SongSearch.blur();
								SongSearch.textContent = null;
								searchSong();
								SearchIcon.removeEventListener("touchend", blurSongSearchField);
								SearchIcon.addEventListener("touchend", focusSongSearchField);
							}
					}
			}
			
		function checkSearchKey(e)
			{
				var KeyPressed = e.keyCode;
				
				if (KeyPressed == 13)
					{
						SongSearch.textContent = null;
						searchSong();
					}
			}
		function focusSongSearchField()
			{
				focusSearchField(1);
			}
		
		function blurSongSearchField()
			{
				focusSearchField(0);
			}
			
		function setRandomTheme()
			{
				var	RandomNumber = Math.floor((Math.random() * Themes.length));
				var CheckRepeated = RandomNumber;
				while (RandomNumber == CheckRepeated)
					{
						RandomNumber = Math.floor((Math.random() * Themes.length));
					}
				CurrentTheme = Themes[RandomNumber].replace(' ', '_');
				changeTheme();
			}
			
		function showShareMessage()
			{
				ShareMessage.className = "ShareMessageMobileTap MoreInfo"+CurrentTheme;
			}
			
		function hideShareMessage()
			{
				ShareMessage.className = "ShareMessageMobile MoreInfo"+CurrentTheme;
			}
			
		function hideShareMessageTimeout()
			{
				if (ShareMessage.textContent.search("copied") != -1)
					{
						setTimeout(hideShareMessage, 1500);
					}
				else
					{
						hideShareMessage();
					}
			}
			
		function copySongURL()
			{
				var Range = document.createRange();
				Selection = window.getSelection();
				HiddenShareText.textContent = HostURL+"index.html?Song="+SongName+"&Theme="+CurrentTheme;
				Range.selectNodeContents(HiddenShareText);
				Selection.addRange(Range);
				document.execCommand('copy');
				ShareMessage.textContent = "Song URL copied to clipboard.";
				setTimeout(resetShareMessage, 2000);
			}
			
		function resetShareMessage()
			{
				if (IsMobile != 1)
					{
						ShareMessage.textContent = "Copy song URL to clipboard.";
					}
				else
					{
						ShareMessage.textContent = "Copy song URL to clipboard. To cancel, move your finger away and let go.";
					}
			}
			
		function playMusic()
			{
				if (MusicPlayer.paused)
					{
						MusicPlayer.play();
					}
				PlayButton.value = "Pause";
				if (IsMobile != 1)
					{
						PlayButton.removeEventListener("click", playMusic);
						PlayButton.addEventListener("click", pauseMusic);
					}
				else
					{
						PlayButton.removeEventListener("touchend", playMusic);
						PlayButton.addEventListener("touchend", pauseMusic);
					}
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
				if (IsMobile != 1)
					{
						PlayButton.removeEventListener("click", pauseMusic);
						PlayButton.addEventListener("click", playMusic);
					}
				else
					{
						PlayButton.removeEventListener("touchend", pauseMusic);
						PlayButton.addEventListener("touchend", playMusic);
					}
				localStorage.setItem("IsPlaying", 0);
				GetIsPlaying = localStorage.getItem("IsPlaying");
				console.log("Music has been paused.");
			}
			
		function checkControls()
			{
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
				if (PlayedAllSongsStorage.length >= TotalSongs.length)
					{
						LoopModeCheck.disabled = true;
					}
				else
					{
						LoopModeCheck.disabled = false;
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
						if (IsMobile != 1)
							{
								PlayTimeCurrent.className = "PlayTimeCurrent"+CurrentTheme+" PlayTimeCurrentError";
								PlayTimeTotal.className = "PlayTimeTotal"+CurrentTheme+" PlayTimeTotalError";
							}
						else
							{
								PlayTimeCurrent.className = "PlayTimeCurrent"+CurrentTheme+" PlayTimeCurrentErrorMobile";
								PlayTimeTotal.className = "PlayTimeTotal"+CurrentTheme+" PlayTimeTotalErrorMobile";
							}
						PlayTrack.value = 0;
						ErrorCheck = 1;
					}
				else
					{
						if (IsMobile != 1)
							{
								PlayTimeCurrent.className = "PlayTimeCurrent PlayTimeCurrent"+CurrentTheme;
								PlayTimeTotal.className = "PlayTimeTotal PlayTimeTotal"+CurrentTheme;
							}
						else
							{
								PlayTimeCurrent.className = "PlayTimeCurrentMobile PlayTimeCurrent"+CurrentTheme;
								PlayTimeTotal.className = "PlayTimeTotalMobile PlayTimeTotal"+CurrentTheme;
							}
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
				MusicPlayer.currentTime = GetSongPlaybackTime;
			}
			
		function resetPlayTime()
			{
				if (CurrentPlayback.textContent != "ERR" && TotalPlayback.textContent != "OR!")
					{
						MusicPlayer.currentTime = 0;
					}
					
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
				if (MusicPlayer.currentTime > (MusicPlayer.duration * .15) || PlaylistCount == 0)
					{
						MusicPlayer.currentTime = 0;
					}
				else
					{
						PlaylistCount--;
						localStorage.setItem("PlaylistCounter", PlaylistCount);
						setSong(1);
						checkControls();
					}
			}
			
		function songNumber()
			{
				if (PlaylistCount >= Playlist.length-1)
					{
						if (LoopMode == 0)
							{
								if (ShuffleMode == 0)
									{
										SongNumber = TotalSongs.indexOf(Playlist[PlaylistCount]);
										
										if (SongNumber < TotalSongs.length-1)
											{
												SongNumber++;
											}
										else
											{
												SongNumber = 0;
											}
										SongName = TotalSongs[SongNumber];
										CheckRepeatedSong = Playlist.indexOf(SongName);
										checkIfSongNotListened();
										while (CheckRepeatedSong != -1)
											{
												if (SongNumber < TotalSongs.length-1)
													{
														SongNumber++;
													}
												else
													{
														SongNumber = 0;
														SongNumber++;
													}
												SongName = TotalSongs[SongNumber];
												CheckRepeatedSong = Playlist.indexOf(SongName);
												checkIfSongNotListened();
												if (PlayedAllSongsStorage.length >= TotalSongs.length)
													{
														var OnlyOnce = 1;
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
														var OnlyOnce = 1;
														break;
													}
											}
									}
							}
						else
							{
								if (ShuffleMode == 0)
									{
										SongNumber = TotalSongs.indexOf(Playlist[PlaylistCount]);
										if (SongNumber < TotalSongs.length-1)
											{
												SongNumber++;
											}
										else
											{
												SongNumber = 0;
											}
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
				if (PlayedAllSongsStorage.length == TotalSongs.length && OnlyOnce == 1)
					{
						LoopModeCheck.checked = true;
						LoopModeCheck.disabled = true;
						loopMode();
						OnlyOnce = 0;
					}
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
					
				MusicPlayer.volume = (GetVolume/100);
				setVolumeWidth();
				VolumeNumber.textContent = VolumeSlider.value;
			}
			
		function setVolumeWidth()
			{
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
			
		function getPlayTime(Exception)
			{	
				if (!MusicPlayer.paused || Exception == 1)
					{
						if (ErrorCheck == 0)
							{	
								localStorage.setItem("SongPlaybackTime", MusicPlayer.currentTime);
								PlayTime = MusicPlayer.currentTime;
								PlayDuration = MusicPlayer.duration;
								IfNumber = isNaN(PlayDuration);
						
							if (IfNumber == true)
								{
									loading();
								}
							else
								{
									TimeLeft = PlayDuration - PlayTime;
						
									PlaySecondDown = Math.floor(TimeLeft % 60);
									PlayMinuteDown = Math.floor(TimeLeft / 60);
									PlaySecondDown = (PlaySecondDown < 10) ? "0"+PlaySecondDown: PlaySecondDown;
									TotalPlayback.textContent = "-"+PlayMinuteDown+":"+PlaySecondDown;
						
									PlaySecondUp = Math.floor(PlayTime % 60);
									PlayMinuteUp = Math.floor(PlayTime / 60);
									PlaySecondUp = (PlaySecondUp < 10) ? "0"+PlaySecondUp: PlaySecondUp;
									CurrentPlayback.textContent = PlayMinuteUp+":"+PlaySecondUp;
									PlayTrack.value = (100 / PlayDuration) * PlayTime;
									PlayTrackThumb.style.left = PlayTrack.value+"%";
									PlayTrackFill.style.width = Number(PlayTrackThumb.style.left.replace("%", ""))+"%";
								}
							}
							
						if (MusicPlayer.currentTime < (MusicPlayer.duration * .15) && PlaylistCount != 0)
							{
								PreviousSong.value = "|<<"
							}
						else
							{
								PreviousSong.value = "|<"
							}
					}
			}
		
		function seekMusic()
			{
				if (PlayTrackMouseDown == 1)
					{
						lowerTransitionSpeed("0s");
					}
				else
					{
						lowerTransitionSpeed("0.3s");
					}
					
				PlayEndTime = PlayDuration / 100;
				MusicPlayer.currentTime = PlayTrack.value * PlayEndTime;
				PlayTrackThumb.style.left = PlayTrack.value+"%";
				PlayTrackFill.style.width = PlayTrack.value+"%";
				getPlayTime(1);
			}
			
		function showClearPlaylistMessage()
			{
				ClearPlaylistMessage.className = "ClearPlaylistMessageMobileTap MoreInfo"+CurrentTheme;
			}
			
		function hideClearPlaylistMessage()
			{
				ClearPlaylistMessage.className = "ClearPlaylistMessageMobile MoreInfo"+CurrentTheme;
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
			
		function scalePlayer(Scale, NoConsole)
			{
				var TextDecoration = "Underline";
				
				if (Scale == 1)
					{
						if (IsMobile != 1)
							{
						MediaPlayerContainer.className = "MediaPlayerContainer MediaPlayerContainerScaledx1";
							}
						ScaleLinkx1.style.textDecoration = TextDecoration;
				
						if (IsPortable == 1)
							{
								window.resizeTo(330, 250);
							}
						
						localStorage.setItem("SavedScale", 1)
						ScaleNumber = localStorage.getItem("SavedScale");
						if (NoConsole != 1)
							{
								console.log("Player scaled to x1.");
							}
					}
				else
					{
						ScaleLinkx1.style.textDecoration = null;
					}

				if (Scale == 2)
					{
						if (IsMobile != 1)
							{
						MediaPlayerContainer.className = "MediaPlayerContainer MediaPlayerContainerScaledx2";
							}
						ScaleLinkx2.style.textDecoration = TextDecoration;
				
						if (IsPortable == 1)
							{
								window.resizeTo(630, 395);
							}
							
						localStorage.setItem("SavedScale", 2)
						ScaleNumber = localStorage.getItem("SavedScale");
						if (NoConsole != 1)
							{
								console.log("Player scaled to x2.");
							}
					}
				else
					{
						ScaleLinkx2.style.textDecoration = null;
					}
					
				if (Scale == 3)
					{
						if (IsMobile != 1)
							{
						MediaPlayerContainer.className = "MediaPlayerContainer MediaPlayerContainerScaledx3";
							}
						ScaleLinkx3.style.textDecoration = TextDecoration;
				
						if (IsPortable == 1)
							{
								window.resizeTo(925, 565);
							}
							
						localStorage.setItem("SavedScale", 3)
						ScaleNumber = localStorage.getItem("SavedScale");
						if (NoConsole != 1)
							{
								console.log("Player scaled to x3.");
							}
					}
				else
					{
						ScaleLinkx3.style.textDecoration = null;
					}

				if (Scale == 4)
					{
						if (IsMobile != 1)
							{
						MediaPlayerContainer.className = "MediaPlayerContainer MediaPlayerContainerScaledx4";
							}
						ScaleLinkx4.style.textDecoration = TextDecoration;
				
						if (IsPortable == 1)
							{
								window.resizeTo(1225, 720);
							}
							
						localStorage.setItem("SavedScale", 4)
						ScaleNumber = localStorage.getItem("SavedScale");
						if (NoConsole != 1)
							{
								console.log("Player scaled to x4.");
							}
					}
				else
					{
						ScaleLinkx4.style.textDecoration = null;
					}
			}
			
		function resetOptionFunctionStyle()
			{
				OptionInfo.className = "OptionInfoMobile MoreInfo"+CurrentTheme;
			}

		function moreInfo(OptionName)
			{
				if (OptionName == "Repeat")
					{
						OptionInfo.textContent = "Repeat the current playing song over and over indefinitively.";
						if (IsMobile != 1)
							{
								OptionInfo.style.bottom = "60px";
							}
						else
							{	
								OptionInfo.style.top = "-10px";
							}
					}
				if (OptionName == "Shuffle")
					{
						OptionInfo.textContent = "Play a random song after the current song ends playing. [Only works if at the end of playlist. Next Button has to be \">>+\"]";
						if (IsMobile != 1)
							{
								OptionInfo.style.bottom = "40px";
							}
						else
							{
								OptionInfo.style.top = "5px";
							}
					}
				if (OptionName == "Loop")
					{
						OptionInfo.textContent = "Loop through all of the songs whether or not you have listened to them already. The player skips songs you have listened to by default. When all of the available songs have been listened to, this option will be enabled automatically and cannot be disabled until the playlist is cleared.";
						if (IsMobile != 1)
							{
								OptionInfo.style.bottom = "22px";
							}
						else
							{
								OptionInfo.style.top = "10px";
							}
					}
				if (OptionName == "Theme")
					{
						OptionInfo.textContent = "Change the current theme to a random one whenever a new song starts playing.";
						if (IsMobile != 1)
							{
								OptionInfo.style.bottom = "22px";
							}
						else
							{
								OptionInfo.style.top = "140px";
							}
					}
					
				if (IsMobile == 1)
					{
						OptionInfo.className = "OptionInfoMobileTap MoreInfo"+CurrentTheme;
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
			
		function checkIfNotChangeStyle()
			{

				if (SongInformation.innerHTML.search("<a href") == -1 && MouseOverSongList == 1)
					{
						SongInformation.style.opacity = "0";
						if (IsMobile != 1)
							{
								SongListContainer.className = "SongListContainer";
								SongSelection.className = "SongList SongList"+CurrentTheme;
							}
						else
							{
								SongListContainer.className = "SongListContainerMobile";
								SongSelection.className = "SongListMobile SongList"+CurrentTheme;
							}
					}
				else
					{
						if (IsMobile != 1)
							{
								SongListContainer.className = "SongListContainerNoHover";
								SongSelection.className = "SongListNoHover SongList"+CurrentTheme;
							}
						else
							{
								SongListContainer.className = "SongListContainerNoHoverMobile";
								SongSelection.className = "SongListNoHoverMobile SongList"+CurrentTheme;
							}
						if (MouseOverSongList == 1)
							{
								setTimeout(function() { scrollToPlaying(0); }, 100);
							}
						setTimeout(checkIfNotChangeStyle, 0001);
					}
			}
			
		function setSongInformation()
			{	
				SongInformation.style.opacity = "0";
				setTimeout(checkSongInformation, 1000);
				setTimeout(songInfoVisible, 1000);
			}
				
				
		function checkSongInformation()
			{	
				if (SongInfoNumber == 1)
					{
						if (SongID.dataset.series != null)
							{
								SongInformation.textContent = SongID.dataset.series;
							}
							
						SongInfoNumber++;
						
						if (SongID.dataset.series != null)
							{
								return;
							}
					}
					
				if (SongInfoNumber == 2)
					{
						if (SongID.dataset.composer != null)
							{
								SongInformation.textContent = "Composed By: "+SongID.dataset.composer;
							}
							
						SongInfoNumber++;

						if (SongID.dataset.composer != null)
							{
								return;
							}
					}
					
				if (SongInfoNumber == 3)
					{
						if (SongID.dataset.artist != null)
							{
								SongInformation.textContent = "Lead Singer(s): "+SongID.dataset.artist;
							}

						SongInfoNumber++;
						
						if (SongID.dataset.artist != null)
							{
								return;
							}
					}
					
				if (SongInfoNumber == 4)
					{
						if (SongID.dataset.contributingartist != null)
							{
								SongInformation.textContent = "Also Sang By: "+SongID.dataset.contributingartist;
							}

						SongInfoNumber++;
						
						if (SongID.dataset.contributingartist != null)
							{
								return;
							}
					}
					
				if (SongInfoNumber == 5)
					{
						if (SongID.dataset.album != null)
							{
								AlbumLinks = "Album(s): "+SongID.dataset.album.replace("SFM", "<a href=\"http://mlp.wikia.com/wiki/Songs_of_Friendship_and_Magic\" target=\"_blank\">SFM</a>").replace("SP", "<a href=\"http://mlp.wikia.com/wiki/Songs_of_Ponyville\" target=\"_blank\">SP</a>").replace("RRs", "<a href=\"http://mlp.wikia.com/wiki/My_Little_Pony_Equestria_Girls:_Rainbow_Rocks_-_Original_Motion_Picture_Soundtrack\" target=\"_blank\">RRs</a>").replace("MFT", "<a href=\"http://mlp.wikia.com/wiki/Magical_Friendship_Tour\" target=\"_blank\">MFT</a>").replace("EGs", "<a href=\"http://mlp.wikia.com/wiki/My_Little_Pony_Equestria_Girls_-_Original_Motion_Picture_Soundtrack\" target=\"_blank\">EGs</a>").replace("RRcd", "<a href=\"http://mlp.wikia.com/wiki/My_Little_Pony_Equestria_Girls_-_Rainbow_Rocks_CD\" target=\"_blank\">RRcd</a>").replace("EGcd", "<a href=\"http://mlp.wikia.com/wiki/My_Little_Pony_Equestria_Girls_CD\" target=\"_blank\">EGcd</a>").replace("SH", "<a href=\"http://mlp.wikia.com/wiki/Songs_of_Harmony\" target=\"_blank\">SH</a>").replace("FMR", "<a href=\"http://mlp.wikia.com/wiki/Friendship_is_Magic_Remixed\" target=\"_blank\">FMR</a>").replace("CC", "<a href=\"http://mlp.wikia.com/wiki/My_Little_Pony_2015_Convention_Collection\" target=\"_blank\">CC</a>").replace("FGs", "<a href=\"http://mlp.wikia.com/wiki/My_Little_Pony_Equestria_Girls:_Friendship_Games_-_Original_Motion_Picture_Soundtrack\" target=\"_blank\">FGs</a>").replace("Xmas", "<a href=\"http://mlp.wikia.com/wiki/It%27s_a_Pony_Kind_of_Christmas\" target=\"_blank\">Xmas</a>").replace("FIMc", "<a href=\"http://mlp.wikia.com/wiki/Friendship_is_Magic_Collection\" target=\"_blank\">FIMc</a>").replace("EGC", "<a href=\"http://mlp.wikia.com/wiki/Equestria_Girls_Collection\" target=\"_blank\">EGC</a>").replace("PP", "<a href=\"http://mlp.wikia.com/wiki/Pinkie_Pie%27s_Party_Playlist\" target=\"_blank\">PP</a>").replace("LoE", "<a href=\"http://mlp.wikia.com/wiki/My_Little_Pony_Equestria_Girls:_Legend_of_Everfree_-_Original_Motion_Picture_Soundtrack\" target=\"_blank\">LoE</a>").replace("EE", "<a href=\"http://mlp.wikia.com/wiki/Explore_Equestria:_Greatest_Hits\" target=\"_blank\">EE</a>").replace("MR", "<a href=\"http://en.wikipedia.org/wiki/Squeeze_Box:_The_Complete_Works_of_%22Weird_al%22_Yankovic#Medium_Rarities_.282017.29\" target=\"_blank\">MR</a>");
								SongInformation.innerHTML = AlbumLinks;
							}

						SongInfoNumber++;
						
						if (SongID.dataset.album != null)
							{
								return;
							}
					}
					
				if (SongInfoNumber == 6)
					{
						if (SongID.dataset.featuredin != null)
							{
								SongInformation.textContent = "Featured In: "+SongID.dataset.featuredin;
							}

						SongInfoNumber++;
						
						if (SongID.dataset.featuredin != null)
							{
								return;
							}
					}
					
				if (SongInfoNumber == 7)
					{
						if (SongID.dataset.moreinfo != null)
							{
								SongInformation.innerHTML = SongID.dataset.moreinfo;
							}
							
						SongInfoNumber++;
						
						if (SongID.dataset.moreinfo != null)
							{
								return;
							}
					}
					
				if (SongInfoNumber == 8)
					{
						if (SongID.dataset.copyright != null)
							{
								SongInformation.textContent = SongID.dataset.copyright;
							}

						SongInfoNumber = 1;

						if (SongID.dataset.copyright != null)
							{
								return;
							}
						else
							{
								checkSongInformation();
							}
					}
			}
			
		function songInfoVisible()
			{
				SongInformation.style.opacity = "1";
			}			
			
		function scrollToPlaying(OffSet, Exception)
			{
				SongSelectorID = document.getElementById(Playlist[PlaylistCount]+"-Selected");
				if (SongInformation.innerHTML.search("<a href") == -1 || Exception == 1 || IsMobile == 1)
					{
						SongSelection.scrollTop = SongSelectorID.offsetTop - OffSet;
					}
			}
			
		function scrollSongUp()
			{
				SongSelection.scrollTop -= 1;
				scrollSongBar();
			}
			
		function scrollSongDown()
			{
				SongSelection.scrollTop += 1;
				scrollSongBar();
			}
			
		function scrollThemeUp()
			{
				ThemeSelection.scrollTop -= 1;
			}
			
		function scrollThemeDown()
			{
				ThemeSelection.scrollTop += 1;
			}
			
		function scrollSongBar()
			{
				SongListTrack.value = (100 / SongSelection.scrollHeight) * SongSelection.scrollTop;
				ScrollSongBar.style.top = (ScrollSongRange.clientHeight / SongSelection.scrollHeight) * SongSelection.scrollTop + "px";
			}
			
		function scrollSongList()
			{
				SongSelection.scrollTop = (SongSelection.scrollHeight / 100) * SongListTrack.value;
				ScrollSongBar.style.top = (ScrollSongRange.clientHeight / SongSelection.scrollHeight) * SongSelection.scrollTop + "px";
				
			}
			
		function portableMode()
			{
				PortableWindow = window.open("Portable.html", "", "directories = no, menubar = no, scrollbars = no, status = no, toolbar = no, location = no");
				document.getElementById("HiddenPlayerContainer").innerHTML = "";
				document.getElementById("MediaPlayerContainer").innerHTML = "";
				document.getElementById("MediaPlayerRefresh").innerHTML = "Please refresh the page to get the media player back here.";
			}
			
		/* Media Player Themes */
		
			function changeTheme()
				{
					if (UsedThemes.indexOf(CurrentTheme) == -1)
						{
							if (UsedThemes.indexOf(CurrentTheme.replace(/_/g, " ")) == -1)
								{
									UsedThemes.push(CurrentTheme.replace(/_/g, " "));
									localStorage.setItem("SavedUsedThemes", UsedThemes);
								}
								
							ThemeID = document.getElementById(CurrentTheme.replace(' ', '_'));
							if (ThemeID.innerHTML.indexOf(NewHTML) != -1)
								{
									UpdatedThemeText = ThemeID.innerHTML.substring(0, ThemeID.innerHTML.lastIndexOf(NewHTML));
									ThemeID.innerHTML = UpdatedThemeText;
								}
						}
					localStorage.setItem("SavedTheme", CurrentTheme);
					
					if (IsMobile != 1)
						{
							ContentShade.className = "ContentShade ContentShade"+CurrentTheme;
							MediaPlayerSection.className = "MediaPlayerSection MediaPlayerSection"+CurrentTheme;
							SongTrack.className = "SongTrack SongTrack"+CurrentTheme+" PlayerSection"+CurrentTheme;
							scalePlayer(ScaleNumber, 1);
							ScaleLinkx1.className = "PlayerLink"+CurrentTheme;
							ScaleLinkx2.className = "PlayerLink"+CurrentTheme;
							ScaleLinkx3.className = "PlayerLink"+CurrentTheme;
							ScaleLinkx4.className = "PlayerLink"+CurrentTheme;
							PortablePlayerLink.className = "PlayerLink"+CurrentTheme;
							PlayerSize.className = "PlayerSize PlayerText"+CurrentTheme;
							ClearPlaylistLink.className = "PlayerLink"+CurrentTheme;
							PlayTrack.className = "PlayTrack";
							PreviousSong.className = "PlayButtons PlayButtons"+CurrentTheme;
							PlayButton.className = "PlayButtons PlayButtons"+CurrentTheme;
							NextSong.className = "PlayButtons PlayButtons"+CurrentTheme;
							VolumeControlTable.className = "VolumeControlTable PlayerSection"+CurrentTheme;
							SongCount.className = "SongCount PlayerSection"+CurrentTheme;
							CheckboxesSection.className = "CheckboxesSection PlayerSection"+CurrentTheme;
							RepeatModeCheck.className = "RepeatModeCheck PlayerCheckboxes"+CurrentTheme;
							ShuffleModeCheck.className = "ShuffleModeCheck PlayerCheckboxes"+CurrentTheme;
							LoopModeCheck.className = "LoopModeCheck PlayerCheckboxes"+CurrentTheme;
							ThemeModeCheck.className = "ThemeModeCheck PlayerCheckboxes"+CurrentTheme;
							CurrentlyPlaying.className = "CurrentlyPlaying PlayerText"+CurrentTheme;
							TroubleshootContainer.className = "TroubleshootContainer MoreInfo"+CurrentTheme;
							Troubleshoot.className = "Troubleshoot";
							TroubleshootMessage.className = "TroubleshootMessage";
							ShareContainer.className = "ShareContainer MoreInfo"+CurrentTheme;
							ShareCircle1.className = "ShareCircle1";
							ShareConnectingLine1.className = "ShareConnectingLine1";
							ShareCircle2.className = "ShareCircle2";
							ShareConnectingLine2.className = "ShareConnectingLine2";
							ShareCircle3.className = "ShareCircle3";
							ShareIcon.className = "ShareIcon";
							ShareMessage.className = "ShareMessage MoreInfo"+CurrentTheme;
							PlayTimeCurrent.className = "PlayTimeCurrent PlayTimeCurrent"+CurrentTheme;
							PlayTimeTotal.className = "PlayTimeTotal PlayTimeTotal"+CurrentTheme;
							PlayTrackLength.className = "RangeLength RangeLength"+CurrentTheme;
							PlayTrackFill.className = "RangeFill RangeFill"+CurrentTheme;
							PlayTrackThumb.className = "RangeThumb RangeThumb"+CurrentTheme;
							VolumeLength.className = "RangeLength RangeLength"+CurrentTheme;
							VolumeFill.className = "RangeFill RangeFill"+CurrentTheme;
							VolumeThumb.className = "RangeThumb VolumeThumb RangeThumb"+CurrentTheme;
							VolumeBody.className = "VolumeBody VolumeBody"+CurrentTheme;
							VolumeArc.className = "VolumeArc VolumeArc"+CurrentTheme;
							VolumeBar1.className = "VolumeBar1 VolumeBar1"+CurrentTheme;
							VolumeBar2.className = "VolumeBar2 VolumeBar2"+CurrentTheme;
							VolumeBar3.className = "VolumeBar3 VolumeBar3"+CurrentTheme;
							VolumeBar4.className = "VolumeBar4 VolumeBar4"+CurrentTheme;
							VolumeBar5.className = "VolumeBar5 VolumeBar5"+CurrentTheme;
							VolumeX.className = "VolumeX VolumeX"+CurrentTheme;
							VolumeNumber.className = "VolumeNumber";
							OptionInfo.className = "OptionInfo MoreInfo"+CurrentTheme;
							VolumeCell.className = "VolumeCell VolumeCell"+CurrentTheme;
							SongSelection.className = "SongList SongList"+CurrentTheme;
							SearchContainer.className = "SearchContainer MediaPlayerSection"+CurrentTheme;
							SearchIcon.className = "SearchIcon";
							SearchHandle.className = "SearchHandle";
							SearchCircle.className = "SearchCircle SearchCircle"+CurrentTheme;
							SongSearch.className = "SongSearch SongSearch"+CurrentTheme;
							SongInformation.className = "SongInformation SongInformation"+CurrentTheme;
							SongArrowUp.className = "SongArrowUp ArrowUp"+CurrentTheme;
							ScrollSongBar.className = "ScrollSongBar ScrollBar"+CurrentTheme;
							ScrollSongRange.className = "ScrollSongRange ScrollRange"+CurrentTheme;
							SongArrowDown.className = "SongArrowDown ArrowDown"+CurrentTheme;
							ThemeSelection.className = "ThemeSelection SongList"+CurrentTheme;
							SelectTheme.className = "SelectTheme SelectTheme"+CurrentTheme;
							ThemeArrowUp.className = "ThemeArrowUp ArrowUp"+CurrentTheme;
							ThemeArrowDown.className = "ThemeArrowDown ArrowDown"+CurrentTheme;
						}
					else
						{
							ContentShade.className = "ContentShadeMobile ContentShade"+CurrentTheme;
							MediaPlayerSection.className = "MediaPlayerSectionMobile MediaPlayerSection"+CurrentTheme;
							SongTrack.className = "SongTrackMobile SongTrack"+CurrentTheme+" PlayerSection"+CurrentTheme;
							PlayTrack.className = "PlayTrackMobile";
							PreviousSong.className = "PlayButtonsMobile PlayButtons"+CurrentTheme;
							PlayButton.className = "PlayButtonsMobile PlayButtons"+CurrentTheme;
							NextSong.className = "PlayButtonsMobile PlayButtons"+CurrentTheme;
							VolumeControlTable.className = "VolumeControlTableMobile PlayerSection"+CurrentTheme;
							SongCount.className = "SongCountMobile PlayerSection"+CurrentTheme;
							CheckboxesSection.className = "CheckboxesSectionMobile PlayerSection"+CurrentTheme;
							RepeatModeCheck.className = "RepeatModeCheckMobile PlayerCheckboxes"+CurrentTheme;
							ShuffleModeCheck.className = "ShuffleModeCheckMobile PlayerCheckboxes"+CurrentTheme;
							LoopModeCheck.className = "LoopModeCheckMobile PlayerCheckboxes"+CurrentTheme;
							ThemeModeCheck.className = "ThemeModeCheckMobile PlayerCheckboxes"+CurrentTheme;
							CurrentlyPlaying.className = "CurrentlyPlayingMobile PlayerText"+CurrentTheme;
							TroubleshootContainer.className = "TroubleshootContainerMobile MoreInfo"+CurrentTheme;
							Troubleshoot.className = "TroubleshootMobile";
							ClearPlaylistContainer.className = "ClearPlaylistContainerMobile PlayerSection"+CurrentTheme;
							TroubleshootMessage.className = "TroubleshootMessageMobile MoreInfo"+CurrentTheme;
							ClearPlaylistMessage.className = "ClearPlaylistMessageMobile MoreInfo"+CurrentTheme;
							ShareContainer.className = "ShareContainerMobile MoreInfo"+CurrentTheme;
							ShareIcon.className = "ShareIconMobile";
							ShareCircle1.className = "ShareCircle1Mobile";
							ShareConnectingLine1.className = "ShareConnectingLine1Mobile";
							ShareCircle2.className = "ShareCircle2Mobile";
							ShareConnectingLine2.className = "ShareConnectingLine2Mobile";
							ShareCircle3.className = "ShareCircle3Mobile";
							ShareMessage.className = "ShareMessageMobile MoreInfo"+CurrentTheme;
							PlayTimeCurrent.className = "PlayTimeCurrentMobile PlayTimeCurrent"+CurrentTheme;
							PlayTimeTotal.className = "PlayTimeTotalMobile PlayTimeTotal"+CurrentTheme;
							PlayTrackLength.className = "RangeLengthMobile RangeLength"+CurrentTheme;
							PlayTrackFill.className = "RangeFillMobile RangeFill"+CurrentTheme;
							PlayTrackThumb.className = "RangeThumbMobile RangeThumb"+CurrentTheme;
							VolumeLength.className = "RangeLengthMobile RangeLength"+CurrentTheme;
							VolumeFill.className = "RangeFillMobile RangeFill"+CurrentTheme;
							VolumeThumb.className = "RangeThumbMobile VolumeThumbMobile RangeThumb"+CurrentTheme;
							VolumeBody.className = "VolumeBodyMobile VolumeBody"+CurrentTheme;
							VolumeArc.className = "VolumeArcMobile VolumeArc"+CurrentTheme;
							VolumeBar1.className = "VolumeBar1Mobile VolumeBar1"+CurrentTheme;
							VolumeBar2.className = "VolumeBar2Mobile VolumeBar2"+CurrentTheme;
							VolumeBar3.className = "VolumeBar3Mobile VolumeBar3"+CurrentTheme;
							VolumeBar4.className = "VolumeBar4Mobile VolumeBar4"+CurrentTheme;
							VolumeBar5.className = "VolumeBar5Mobile VolumeBar5"+CurrentTheme;
							VolumeX.className = "VolumeXMobile VolumeX"+CurrentTheme;
							VolumeNumber.className = "VolumeNumberMobile";
							OptionInfo.className = "OptionInfoMobile MoreInfo"+CurrentTheme;
							VolumeCell.className = "VolumeCellMobile VolumeCell"+CurrentTheme;
							SongSelection.className = "SongListMobile SongList"+CurrentTheme;
							SearchContainer.className = "SearchContainerMobile MediaPlayerSection"+CurrentTheme;
							SearchIcon.className = "SearchIconMobile";
							SearchHandle.className = "SearchHandleMobile";
							SearchCircle.className = "SearchCircleMobile SearchCircle"+CurrentTheme;
							SongSearch.className = "SongSearchMobile SongSearch"+CurrentTheme;
							CurrentSongContainer.className = "CurrentSongContainerMobile PlayerSection"+CurrentTheme;
							CurrentSong.className = "CurrentSongMobile"
							SongInformation.className = "SongInformationMobile PlayerSection"+CurrentTheme;
							SongArrowUp.className = "SongArrowUpMobile ArrowUp"+CurrentTheme;
							ScrollSongBar.className = "ScrollSongBarMobile ScrollBar"+CurrentTheme;
							ScrollSongRange.className = "ScrollSongRangeMobile ScrollRange"+CurrentTheme;
							SongArrowDown.className = "SongArrowDownMobile ArrowDown"+CurrentTheme;
							ThemeSelection.className = "ThemeSelectionMobile SongList"+CurrentTheme;
							SelectTheme.className = "SelectThemeMobile SelectTheme"+CurrentTheme;
							ThemeArrowUp.className = "ThemeArrowUpMobile ArrowUp"+CurrentTheme;
							ThemeArrowDown.className = "ThemeArrowDownMobile ArrowDown"+CurrentTheme;
						}
					
					for (count = 0; count < Themes.length; count++)
						{
							if (IsMobile != 1)
								{
									document.getElementById(Themes[count].replace(' ', '_')).className = "ThemeOption Song"+CurrentTheme;
								}
							else
								{
									document.getElementById(Themes[count].replace(' ', '_')).className = "ThemeOptionMobile Song"+CurrentTheme;
								}
						}
						
					for (Song = 0; Song < LastSong; Song++)
						{	
							document.getElementById(TotalSongs[Song]+"-Selected").className = "Song"+CurrentTheme;
						}
						
					console.log("Theme was set to "+CurrentTheme+".");
					
				}
				
		function showTroubleshootMessage()
			{
				TroubleshootMessage.className = "TroubleshootMessageMobileTap MoreInfo"+CurrentTheme;
			}
			
		function hideTroubleshootMessage()
			{
				TroubleshootMessage.className = "TroubleshootMessageMobile MoreInfo"+CurrentTheme;
			}
				
		function resetEverything()
			{
				var KeepSongList = MusicPlayer.innerHTML;
				var KeepSongDates = localStorage.getItem("SavedSongDates");
				var KeepThemeDates = localStorage.getItem("SavedThemeDates"); 
				localStorage.clear();
				localStorage.setItem("SavedSongDates", KeepSongDates);
				localStorage.setItem("SavedThemeDates", KeepThemeDates);
				localStorage.setItem("SongList", KeepSongList);
				location.reload(true);
			}
			
		function changeSongAndThemeHeight()
		{
			SongSelection.style.height = SongListRowMobile.offsetHeight+"px";
			ThemeSelection.style.height = CheckboxesSection.offsetHeight+"px";
			ScrollSongRange.style.height = Number(SongSelection.style.height.replace("px", "")) - 40+"px";
			SongArrowDown.style.top = Number(SongSelection.style.height.replace("px", "")) - 20+"px";
			setTimeout(function() { scrollToPlaying(1, 1); }, 500);
			setTimeout(scrollSongList, 500);
		}