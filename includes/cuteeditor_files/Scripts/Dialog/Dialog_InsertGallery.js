var OxOcef1=["browse_Img_gallery","TargetUrl","uploader1","src","upload.php?","\x26FP=","\x26Type=Image","value","lightyellow","0px","-3px","all","getElementById","\x3Cdiv id=\x22tooltipdiv\x22 style=\x22visibility:hidden;background-color:","\x22 \x3E\x3C/div\x3E","tooltipdiv","left","offsetLeft","offsetTop","offsetParent","style","top","visibility","compatMode","BackCompat","documentElement","body","rightedge","opera","scrollLeft","clientWidth","pageXOffset","innerWidth","contentmeasure","offsetWidth","x","scrollTop","clientHeight","pageYOffset","innerHeight","offsetHeight","y","innerHTML","visible","hidden","px","bottomedge","undefined","hidetip()","element","editor","editdoc","^[a-z]*:[/][/][^/]*","","width","height","IMG","border","alt","product","Gecko","src_cetemp","Edit"];var browse_Img_gallery=Window_GetElement(window,OxOcef1[0],true);var TargetUrl=Window_GetElement(window,OxOcef1[1],true);function SetUpload_imagePath(Ox513){if(document.getElementById(OxOcef1[2])){document.getElementById(OxOcef1[2])[OxOcef1[3]]=OxOcef1[4]+setting+OxOcef1[5]+Ox513+OxOcef1[6];} ;} ;function row_click(Ox513){TargetUrl[OxOcef1[7]]=Ox513;} ;function cancel(){Window_CloseDialog(window);} ;var tipbgcolor=OxOcef1[8];var disappeardelay=250;var vertical_offset=OxOcef1[9];var horizontal_offset=OxOcef1[10];var delayhidetimerid;var ie4=document[OxOcef1[11]];var ns6=document[OxOcef1[12]]&&!document[OxOcef1[11]];if(ie4||ns6){document.write(OxOcef1[13]+tipbgcolor+OxOcef1[14]);var dropmenuobj=Window_GetElement(window,OxOcef1[15],true);} ;function getposOffset(Ox540,Ox541){var Ox542=(Ox541==OxOcef1[16])?Ox540[OxOcef1[17]]:Ox540[OxOcef1[18]];var Ox543=Ox540[OxOcef1[19]];while(Ox543!=null){Ox542+=(Ox541==OxOcef1[16])?Ox543[OxOcef1[17]]:Ox543[OxOcef1[18]];Ox543=Ox543[OxOcef1[19]];} ;return Ox542;} ;function showhide(obj,Ox545,Ox546){if(ie4||ns6){dropmenuobj[OxOcef1[20]][OxOcef1[16]]=dropmenuobj[OxOcef1[20]][OxOcef1[21]]=-500;} ;obj[OxOcef1[22]]=Ox545;} ;function iecompattest(){return (document[OxOcef1[23]]&&document[OxOcef1[23]]!=OxOcef1[24])?document[OxOcef1[25]]:document[OxOcef1[26]];} ;function clearbrowseredge(obj,Ox549){var Ox54a=(Ox549==OxOcef1[27])?parseInt(horizontal_offset)*-1:parseInt(vertical_offset)*-1;if(Ox549==OxOcef1[27]){var Ox54b=ie4&&!window[OxOcef1[28]]?iecompattest()[OxOcef1[29]]+iecompattest()[OxOcef1[30]]-15:window[OxOcef1[31]]+window[OxOcef1[32]]-15;dropmenuobj[OxOcef1[33]]=dropmenuobj[OxOcef1[34]];if(Ox54b-dropmenuobj[OxOcef1[35]]<dropmenuobj[OxOcef1[33]]){Ox54a=dropmenuobj[OxOcef1[33]]-obj[OxOcef1[34]];} ;} else {var Ox54b=ie4&&!window[OxOcef1[28]]?iecompattest()[OxOcef1[36]]+iecompattest()[OxOcef1[37]]-15:window[OxOcef1[38]]+window[OxOcef1[39]]-18;dropmenuobj[OxOcef1[33]]=dropmenuobj[OxOcef1[40]];if(Ox54b-dropmenuobj[OxOcef1[41]]<dropmenuobj[OxOcef1[33]]){Ox54a=dropmenuobj[OxOcef1[33]]+obj[OxOcef1[40]];} ;} ;return Ox54a;} ;function showTooltip(Ox54d,obj){Event_CancelEvent();clearhidetip();dropmenuobj[OxOcef1[42]]=Ox54d;if(ie4||ns6){showhide(dropmenuobj.style,OxOcef1[43],OxOcef1[44]);dropmenuobj[OxOcef1[35]]=getposOffset(obj,OxOcef1[16]);dropmenuobj[OxOcef1[41]]=getposOffset(obj,OxOcef1[21]);dropmenuobj[OxOcef1[20]][OxOcef1[16]]=dropmenuobj[OxOcef1[35]]-clearbrowseredge(obj,OxOcef1[27])+OxOcef1[45];dropmenuobj[OxOcef1[20]][OxOcef1[21]]=dropmenuobj[OxOcef1[41]]-clearbrowseredge(obj,OxOcef1[46])+obj[OxOcef1[40]]*1.1+2+OxOcef1[45];} ;} ;function hidetip(){if( typeof dropmenuobj!=OxOcef1[47]){if(ie4||ns6){dropmenuobj[OxOcef1[20]][OxOcef1[22]]=OxOcef1[44];} ;} ;} ;function delayhidetip(){if(ie4||ns6){delayhidetimerid=setTimeout(OxOcef1[48],disappeardelay);} ;} ;function clearhidetip(){clearTimeout(delayhidetimerid);} ;function cancel(){Window_CloseDialog(window);} ;var obj=Window_GetDialogArguments(window);var element=obj[OxOcef1[49]];var editor=obj[OxOcef1[50]];var editdoc=obj[OxOcef1[51]];function insert(src){if(src){var Ox3ee=src.replace( new RegExp(OxOcef1[52],OxOcef1[53]),OxOcef1[53]);function Actualsize(){var Ox550= new Image();Ox550[OxOcef1[3]]=Ox3ee;if(Ox550[OxOcef1[54]]>0&&Ox550[OxOcef1[55]]>0){element[OxOcef1[54]]=Ox550[OxOcef1[54]];element[OxOcef1[55]]=Ox550[OxOcef1[55]];} else {setTimeout(Actualsize,400);} ;} ;if(element){element[OxOcef1[3]]=Ox3ee;} else {element=editdoc.createElement(OxOcef1[56]);element[OxOcef1[3]]=Ox3ee;element[OxOcef1[57]]=0;element[OxOcef1[58]]=OxOcef1[53];Actualsize();} ;if(navigator[OxOcef1[59]]==OxOcef1[60]){try{element.setAttribute(OxOcef1[61],Ox3ee);} catch(e){} ;} else {if(editor.GetActiveTab()==OxOcef1[62]){element.setAttribute(OxOcef1[61],Ox3ee);} ;} ;editor.InsertElement(element);Window_CloseDialog(window);} ;} ;