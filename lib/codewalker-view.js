'use babel';

export default class CodewalkerView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('codewalker');

    let recordingElement = this.createRecordingElement();

    this.element.appendChild(recordingElement);

    // Create message element
    // const message = document.createElement('div');
    // message.textContent = 'The Codewalker package is Alive! It\'s ALIVE!';
    // message.classList.add('message');
    // this.element.appendChild(message);
  }

  createRecordingElement() {
    let element = document.createElement('div');

    let btn = document.createElement('button');
    btn.textContent = 'Record';
    btn.addEventListener("click", () => {alert('hi1!');})
    element.appendChild(btn);

    btn = document.createElement('button');
    btn.textContent = 'Stop';
    btn.addEventListener("click", () => {alert('hi2!');})
    element.appendChild(btn);

    btn = document.createElement('button');
    btn.textContent = 'Play';
    btn.addEventListener("click", () => {alert('hi3!');})
    element.appendChild(btn);

    btn = document.createElement('button');
    btn.textContent = 'Pause';
    btn.addEventListener("click", () => {alert('hi4!');})
    element.appendChild(btn);

    var slider = document.createElement("INPUT");
    slider.setAttribute("type", "range");
    slider.setAttribute("style", "width: 400px;");

    element.appendChild(slider);

    return element;
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
