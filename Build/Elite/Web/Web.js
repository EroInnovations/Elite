const NOVASTART=()=>{

  CLEAR();

  SWITCHER(800,()=>{

    DESKTOPVERSION();

  },()=>{

    MOBILEVERSION();

  });

};

const MOBILEVERSION=()=>{

  ROUTE("",MOBILEHOMEPAGE,"MOBILEHOMEPAGE");

};

const MOBILEHOMEPAGE=()=>{

  CLEAR();

  HEADER("","Navy",(ELEMENT)=>{

    TEXT(ELEMENT,"h1","","auto 2%","20px","Elite",()=>{

    });

    RIGHTIMAGE(ELEMENT,WHITEMENUICON,"","20px","20px","2%",()=>{

    });

  });

  DIV("","","","transparent","block","auto","",(ELEMENT)=>{

    STYLED(ELEMENT,"top","50px");

  });

};

const DESKTOPVERSION=()=>{

  ROUTE("",MOBILEHOMEPAGE,"MOBILEHOMEPAGE");

};