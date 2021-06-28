document.referrer !== document.location.origin; // Преход с внешнего ресурска + 1
window.history.length > 2 // Не прямой заход в новой вкладке + 1
// Предыдущее время время на странице (Должно быть разным) + 1
// Кол-во совершенных кликов (Должно быть разным) + 1
// (Количество) Анализ движения мыши +
// scroll


export class Scoring {
  private scrollCount = 0;
  private mouseCount = 0;
  private keyCount = 0;

  constructor() {
    window.addEventListener("scroll", (event) => {
      this.scrollCount++
    }, true);

    document.addEventListener("mousemove", () => {
      this.mouseCounter();
    }, true);

    document.addEventListener("touchmove", () => {
      this.mouseCounter();
    }, true);

    document.addEventListener("keydown", () => {
      this.keyCounter();
    }, true);
  }

  public keyCounter() {
    this.keyCount++;
    // update object in cookie
  }

  public mouseCounter() {
    this.mouseCount++;
    // update object in cookie
  }

  public getScore() {
    let score = 0;

    // OZON only
    if (window['email']) {
      score = score + 2;
    }

    if (document.referrer !== document.location.origin) {
      score = score + 1;
    }

    if (window.history.length > 2) {
      score = score + 1;
    }

    if (this.scrollCount > 2) {
      score = score + 1;
    }

    if (this.keyCount > 2) {
      score = score + 1;
    }

    if (this.mouseCount > 2) {
      score = score + 1;
    }

    return score
  }
}

