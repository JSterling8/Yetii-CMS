var OxOc077=["top","dialogArguments","opener","_dialog_arguments","document","onload","value","","uploader1","browse_Frame","contentWindow","btn_CreateDir","btn_zoom_in","btn_zoom_out","btn_Actualsize","divpreview","TargetUrl","Button1","Button2","editor","window","\x3Cbr\x3E",".",".jpeg",".jpg",".gif",".png","\x3CIMG src=\x27","\x27 width=\x27150\x27\x3E",".bmp","\x26nbsp;\x3Cembed src=\x22","\x22 quality=\x22high\x22 width=\x22150\x22 height=\x22150\x22 type=\x22application/x-shockwave-flash\x22 pluginspage=\x22http://www.macromedia.com/go/getflashplayer\x22\x3E\x3C/embed\x3E\x0A","\x26nbsp;",".swf",".avi",".mpg",".mp3",".mpeg","\x26nbsp;\x3Cembed name=\x22MediaPlayer1\x22 src=\x22","\x22 autostart=-1 showcontrols=-1  type=\x22application/x-mplayer2\x22 width=\x22150\x22 height=\x22150\x22 pluginspage=\x22http://www.microsoft.com/Windows/MediaPlayer\x22 \x3E\x3C/embed\x3E\x0A",".wav","URL: ","innerHTML","inp","zoom","style","display","none","wrapupPrompt","iepromptfield","body","div","id","IEPromptBox","promptBlackout","border","1px solid #b0bec7","backgroundColor","#f0f0f0","position","absolute","width","330px","zIndex","100","\x3Cdiv style=\x22width: 100%; padding-top:3px;background-color: #DCE7EB; font-family: verdana; font-size: 10pt; font-weight: bold; height: 22px; text-align:center; background:url(../Images/formbg2.gif) repeat-x left top;\x22\x3E","\x3C/div\x3E","\x3Cdiv style=\x22padding: 10px\x22\x3E","\x3CBR\x3E\x3CBR\x3E","\x3Cform action=\x22\x22 onsubmit=\x22return wrapupPrompt()\x22\x3E","\x3Cinput id=\x22iepromptfield\x22 name=\x22iepromptdata\x22 type=text size=46 value=\x22","\x22\x3E","\x3Cbr\x3E\x3Cbr\x3E\x3Ccenter\x3E","\x3Cinput type=\x22submit\x22 value=\x22\x26nbsp;\x26nbsp;\x26nbsp;","\x26nbsp;\x26nbsp;\x26nbsp;\x22\x3E","\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;","\x3Cinput type=\x22button\x22 onclick=\x22wrapupPrompt(true)\x22 value=\x22\x26nbsp;","\x26nbsp;\x22\x3E","\x3C/form\x3E\x3C/div\x3E","100px","left","offsetWidth","px","block","onmouseover","CuteEditor_ColorPicker_ButtonOver(this)"];function Window_FindDialogArguments(Ox309){var Ox39e=Ox309[OxOc077[0]];if(Ox39e[OxOc077[1]]){return Ox39e[OxOc077[1]];} ;var Ox39f=Ox39e[OxOc077[2]];if(Ox39f==null){return Ox39e[OxOc077[4]][OxOc077[3]];} ;var Ox5b3=Ox39f[OxOc077[4]][OxOc077[3]];if(Ox5b3==null){return Window_FindDialogArguments(Ox39f);} ;return Ox5b3;} ;function reset_hiddens(){} ;Event_Attach(window,OxOc077[5],reset_hiddens);function RequireFileBrowseScript(){} ;function reset_hiddens(){if(TargetUrl[OxOc077[6]]!=OxOc077[7]&&TargetUrl[OxOc077[6]]!=null){do_preview();} ;} ;RequireFileBrowseScript();var uploader1=Window_GetElement(window,OxOc077[8],true);var browse_Frame=Window_GetElement(window,OxOc077[9],true);browse_Frame=browse_Frame[OxOc077[10]];var btn_CreateDir=Window_GetElement(window,OxOc077[11],true);var btn_zoom_in=Window_GetElement(window,OxOc077[12],true);var btn_zoom_out=Window_GetElement(window,OxOc077[13],true);var btn_Actualsize=Window_GetElement(window,OxOc077[14],true);var divpreview=Window_GetElement(window,OxOc077[15],true);var TargetUrl=Window_GetElement(window,OxOc077[16],true);var Button1=Window_GetElement(window,OxOc077[17],true);var Button2=Window_GetElement(window,OxOc077[18],true);var arg=Window_FindDialogArguments(window);var editor=arg[OxOc077[19]];var editwin=arg[OxOc077[20]];var editdoc=arg[OxOc077[4]];do_preview();function do_preview(Ox3e6){var Oxb;Oxb=OxOc077[7];if(Ox3e6!=OxOc077[7]&&Ox3e6!=null){Oxb=Ox3e6;} ;Oxb=Oxb+OxOc077[21];var Ox3ee=TargetUrl[OxOc077[6]];if(Ox3ee==OxOc077[7]){return ;} ;var Ox50a=Ox3ee.substring(Ox3ee.lastIndexOf(OxOc077[22])).toLowerCase();switch(Ox50a){case OxOc077[23]:;case OxOc077[24]:;case OxOc077[25]:;case OxOc077[26]:;case OxOc077[29]:Oxb=Oxb+OxOc077[27]+Ox3ee+OxOc077[28];break ;;case OxOc077[33]:var Ox50b=OxOc077[30]+Ox3ee+OxOc077[31];Oxb=Oxb+Ox50b+OxOc077[32];break ;;case OxOc077[34]:;case OxOc077[35]:;case OxOc077[36]:;case OxOc077[37]:;case OxOc077[40]:var Ox50c=OxOc077[38]+Ox3ee+OxOc077[39];Oxb=Oxb+Ox50c+OxOc077[32];break ;;default:Oxb=Oxb+OxOc077[41]+TargetUrl[OxOc077[6]];break ;;} ;divpreview[OxOc077[42]]=Oxb;} ;function do_insert(){var Ox5b5=arg[OxOc077[43]];if(Ox5b5){try{Ox5b5[OxOc077[6]]=TargetUrl[OxOc077[6]];} catch(x){} ;} ;Window_SetDialogReturnValue(window,TargetUrl.value);Window_CloseDialog(window);} ;function do_Close(){Window_SetDialogReturnValue(window,null);Window_CloseDialog(window);} ;function Zoom_In(){if(divpreview[OxOc077[45]][OxOc077[44]]!=0){divpreview[OxOc077[45]][OxOc077[44]]*=1.2;} else {divpreview[OxOc077[45]][OxOc077[44]]=1.2;} ;} ;function Zoom_Out(){if(divpreview[OxOc077[45]][OxOc077[44]]!=0){divpreview[OxOc077[45]][OxOc077[44]]*=0.8;} else {divpreview[OxOc077[45]][OxOc077[44]]=0.8;} ;} ;function Actualsize(){divpreview[OxOc077[45]][OxOc077[44]]=1;do_preview();} ;function ResetFields(){TargetUrl[OxOc077[6]]=OxOc077[7];} ;if(!Browser_IsWinIE()){btn_zoom_in[OxOc077[45]][OxOc077[46]]=btn_zoom_out[OxOc077[45]][OxOc077[46]]=btn_Actualsize[OxOc077[45]][OxOc077[46]]=OxOc077[47];} ;if(!Browser_IsWinIE()){btn_zoom_in[OxOc077[45]][OxOc077[46]]=btn_zoom_out[OxOc077[45]][OxOc077[46]]=btn_Actualsize[OxOc077[45]][OxOc077[46]]=OxOc077[47];} else {} ;if(Browser_IsIE7()){var _dialogPromptID=null;function IEprompt(Ox381,Ox382,Ox383){that=this;this[OxOc077[48]]=function (Ox384){val=document.getElementById(OxOc077[49])[OxOc077[6]];_dialogPromptID[OxOc077[45]][OxOc077[46]]=OxOc077[47];document.getElementById(OxOc077[49])[OxOc077[6]]=OxOc077[7];if(Ox384){val=OxOc077[7];} ;Ox381(val);return false;} ;if(Ox383==undefined){Ox383=OxOc077[7];} ;if(_dialogPromptID==null){var Ox385=document.getElementsByTagName(OxOc077[50])[0];tnode=document.createElement(OxOc077[51]);tnode[OxOc077[52]]=OxOc077[53];Ox385.appendChild(tnode);_dialogPromptID=document.getElementById(OxOc077[53]);tnode=document.createElement(OxOc077[51]);tnode[OxOc077[52]]=OxOc077[54];Ox385.appendChild(tnode);_dialogPromptID[OxOc077[45]][OxOc077[55]]=OxOc077[56];_dialogPromptID[OxOc077[45]][OxOc077[57]]=OxOc077[58];_dialogPromptID[OxOc077[45]][OxOc077[59]]=OxOc077[60];_dialogPromptID[OxOc077[45]][OxOc077[61]]=OxOc077[62];_dialogPromptID[OxOc077[45]][OxOc077[63]]=OxOc077[64];} ;var Ox386=OxOc077[65]+InputRequired+OxOc077[66];Ox386+=OxOc077[67]+Ox382+OxOc077[68];Ox386+=OxOc077[69];Ox386+=OxOc077[70]+Ox383+OxOc077[71];Ox386+=OxOc077[72];Ox386+=OxOc077[73]+OK+OxOc077[74];Ox386+=OxOc077[75];Ox386+=OxOc077[76]+Cancel+OxOc077[77];Ox386+=OxOc077[78];_dialogPromptID[OxOc077[42]]=Ox386;_dialogPromptID[OxOc077[45]][OxOc077[0]]=OxOc077[79];_dialogPromptID[OxOc077[45]][OxOc077[80]]=parseInt((document[OxOc077[50]][OxOc077[81]]-315)/2)+OxOc077[82];_dialogPromptID[OxOc077[45]][OxOc077[46]]=OxOc077[83];var Ox387=document.getElementById(OxOc077[49]);try{var Ox388=Ox387.createTextRange();Ox388.collapse(false);Ox388.select();} catch(x){Ox387.focus();} ;} ;} ;if(btn_CreateDir){btn_CreateDir[OxOc077[84]]= new Function(OxOc077[85]);} ;if(btn_zoom_in){btn_zoom_in[OxOc077[84]]= new Function(OxOc077[85]);} ;if(btn_zoom_out){btn_zoom_out[OxOc077[84]]= new Function(OxOc077[85]);} ;if(btn_Actualsize){btn_Actualsize[OxOc077[84]]= new Function(OxOc077[85]);} ;