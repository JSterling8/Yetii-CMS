var OxO3805=["inp_src","inp_title","inp_target","sel_protocol","btnbrowse","editor","","href","value","title","target","onclick","length","options","://",":","others","selectedIndex"];var inp_src=Window_GetElement(window,OxO3805[0],true);var inp_title=Window_GetElement(window,OxO3805[1],true);var inp_target=Window_GetElement(window,OxO3805[2],true);var sel_protocol=Window_GetElement(window,OxO3805[3],true);var btnbrowse=Window_GetElement(window,OxO3805[4],true);var obj=Window_GetDialogArguments(window);var editor=obj[OxO3805[5]];SyncToView();function SyncToView(){var src=obj[OxO3805[7]].replace(/$\s*/,OxO3805[6]);Update_sel_protocol(src);inp_src[OxO3805[8]]=src;if(obj[OxO3805[9]]){inp_title[OxO3805[8]]=obj[OxO3805[9]];} ;if(obj[OxO3805[10]]){inp_target[OxO3805[8]]=obj[OxO3805[10]];} ;} ;btnbrowse[OxO3805[11]]=function btnbrowse_onclick(){function Ox4c7(Ox2a6){if(Ox2a6){inp_src[OxO3805[8]]=Ox2a6;} ;} ;editor.SetNextDialogWindow(window);if(Browser_IsSafari()){editor.ShowSelectFileDialog(Ox4c7,inp_src.value,inp_src);} else {editor.ShowSelectFileDialog(Ox4c7,inp_src.value);} ;} ;function sel_protocol_change(){var src=inp_src[OxO3805[8]].replace(/$\s*/,OxO3805[6]);for(var i=0;i<sel_protocol[OxO3805[13]][OxO3805[12]];i++){var Ox2aa=sel_protocol[OxO3805[13]][i][OxO3805[8]];if(src.substr(0,Ox2aa.length).toLowerCase()==Ox2aa){src=src.substr(Ox2aa.length,src[OxO3805[12]]-Ox2aa[OxO3805[12]]);break ;} ;} ;var Ox584=src.indexOf(OxO3805[14]);if(Ox584!=-1){src=src.substr(Ox584+3,src[OxO3805[12]]-3-Ox584);} ;var Ox584=src.indexOf(OxO3805[15]);if(Ox584!=-1){src=src.substr(Ox584+1,src[OxO3805[12]]-1-Ox584);} ;var Ox585=sel_protocol[OxO3805[8]];if(Ox585==OxO3805[16]){Ox585=OxO3805[6];} ;inp_src[OxO3805[8]]=Ox585+src;} ;function Update_sel_protocol(src){var Ox587=false;for(var i=0;i<sel_protocol[OxO3805[13]][OxO3805[12]];i++){var Ox2aa=sel_protocol[OxO3805[13]][i][OxO3805[8]];if(src.substr(0,Ox2aa.length).toLowerCase()==Ox2aa){if(sel_protocol[OxO3805[17]]!=i){sel_protocol[OxO3805[17]]=i;} ;Ox587=true;break ;} ;} ;if(!Ox587){sel_protocol[OxO3805[17]]=sel_protocol[OxO3805[13]][OxO3805[12]]-1;} ;} ;function insert_link(){var arr= new Array();arr[0]=inp_src[OxO3805[8]];if(inp_target[OxO3805[8]]){arr[1]=inp_target[OxO3805[8]];} ;if(inp_title[OxO3805[8]]){arr[2]=inp_title[OxO3805[8]];} ;Window_SetDialogReturnValue(window,arr);Window_CloseDialog(window);} ;