var OxO3e06=["inp_width","eenheid","alignment","hrcolor","hrcolorpreview","shade","sel_size","width","style","value","px","%","size","align","color","backgroundColor","noShade","noshade","","onclick"];var inp_width=Window_GetElement(window,OxO3e06[0],true);var eenheid=Window_GetElement(window,OxO3e06[1],true);var alignment=Window_GetElement(window,OxO3e06[2],true);var hrcolor=Window_GetElement(window,OxO3e06[3],true);var hrcolorpreview=Window_GetElement(window,OxO3e06[4],true);var shade=Window_GetElement(window,OxO3e06[5],true);var sel_size=Window_GetElement(window,OxO3e06[6],true);UpdateState=function UpdateState_Hr(){} ;SyncToView=function SyncToView_Hr(){if(element[OxO3e06[8]][OxO3e06[7]]){if(element[OxO3e06[8]][OxO3e06[7]].search(/%/)<0){eenheid[OxO3e06[9]]=OxO3e06[10];inp_width[OxO3e06[9]]=element[OxO3e06[8]][OxO3e06[7]].split(OxO3e06[10])[0];} else {eenheid[OxO3e06[9]]=OxO3e06[11];inp_width[OxO3e06[9]]=element[OxO3e06[8]][OxO3e06[7]].split(OxO3e06[11])[0];} ;} ;sel_size[OxO3e06[9]]=element[OxO3e06[12]];alignment[OxO3e06[9]]=element[OxO3e06[13]];hrcolor[OxO3e06[9]]=element[OxO3e06[14]];if(element[OxO3e06[14]]){hrcolor[OxO3e06[8]][OxO3e06[15]]=element[OxO3e06[14]];} ;if(element[OxO3e06[16]]){shade[OxO3e06[9]]=OxO3e06[17];} else {shade[OxO3e06[9]]=OxO3e06[18];} ;} ;SyncTo=function SyncTo_Hr(element){if(sel_size[OxO3e06[9]]){element[OxO3e06[12]]=sel_size[OxO3e06[9]];} ;if(hrcolor[OxO3e06[9]]){element[OxO3e06[14]]=hrcolor[OxO3e06[9]];} ;if(alignment[OxO3e06[9]]){element[OxO3e06[13]]=alignment[OxO3e06[9]];} ;if(shade[OxO3e06[9]]==OxO3e06[17]){element[OxO3e06[16]]=true;} else {element[OxO3e06[16]]=false;} ;if(inp_width[OxO3e06[9]]){element[OxO3e06[8]][OxO3e06[7]]=inp_width[OxO3e06[9]]+eenheid[OxO3e06[9]];} ;} ;hrcolor[OxO3e06[19]]=hrcolorpreview[OxO3e06[19]]=function hrcolor_onclick(){SelectColor(hrcolor,hrcolorpreview);} ;