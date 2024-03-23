import Singleton from "./singleton";

function init() {
  const instanceOne = Singleton.getInstance();
  const instanceTwo = Singleton.getInstance();

  if (instanceOne === instanceTwo) {
    console.log("Same Instance");
  } else {
    console.log("Different Instance");
  }
}

init();
