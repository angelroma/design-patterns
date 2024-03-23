class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public businessLogic(){}
}

function init() {
    const instanceOne = Singleton.getInstance();
    const instanceTwo = Singleton.getInstance();
  
    if (instanceOne === instanceTwo) {
      console.log("Same Instance");
    } else {
      console.log("Different Instance");
    }
  }