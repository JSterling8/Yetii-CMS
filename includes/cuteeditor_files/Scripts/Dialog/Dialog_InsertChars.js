var OxO94b5=["Verdana","innerHTML","Unicode","innerText","\x3Cspan style=\x27font-family:","\x27\x3E","\x3C/span\x3E","selfont","length","checked","value","charstable1","charstable2","fontFamily","style","display","block","none"];var editor=Window_GetDialogArguments(window);function getchar(obj){var Ox4a4;var Ox4ea=getFontValue()||OxO94b5[0];if(!obj[OxO94b5[1]]){return ;} ;Ox4a4=obj[OxO94b5[1]];if(Ox4ea==OxO94b5[2]){Ox4a4=obj[OxO94b5[3]];} else {if(Ox4ea!=OxO94b5[0]){Ox4a4=OxO94b5[4]+Ox4ea+OxO94b5[5]+obj[OxO94b5[1]]+OxO94b5[6];} ;} ;editor.PasteHTML(Ox4a4);Window_CloseDialog(window);} ;function cancel(){Window_CloseDialog(window);} ;function getFontValue(){var Ox29e=document.getElementsByName(OxO94b5[7]);for(var i=0;i<Ox29e[OxO94b5[8]];i++){if(Ox29e.item(i)[OxO94b5[9]]){return Ox29e.item(i)[OxO94b5[10]];} ;} ;} ;function sel_font_change(){var Ox4ed=getFontValue()||OxO94b5[0];var Ox4ee=Window_GetElement(window,OxO94b5[11],true);var Ox4ef=Window_GetElement(window,OxO94b5[12],true);Ox4ee[OxO94b5[14]][OxO94b5[13]]=Ox4ed;Ox4ee[OxO94b5[14]][OxO94b5[15]]=(Ox4ed!=OxO94b5[2]?OxO94b5[16]:OxO94b5[17]);Ox4ef[OxO94b5[14]][OxO94b5[15]]=(Ox4ed==OxO94b5[2]?OxO94b5[16]:OxO94b5[17]);} ;