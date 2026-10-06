export const TEXT_SIZE_KEY = "ys-text-size";

/** Runs before first paint (inlined in <head>) so a saved size never flashes. */
export const textSizeBootScript = `try{var s=localStorage.getItem("${TEXT_SIZE_KEY}");if(s&&s!=="0")document.documentElement.dataset.textSize=s}catch(e){}`;
