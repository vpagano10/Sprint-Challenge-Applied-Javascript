// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const entryPoint = document.querySelector('.header-container');

function HeaderCreator() {
    const header = document.createElement('div');
    const showDate = document.createElement('span');
    const title = document.createElement('h1');
    const temperature = document.createElement('span');

    showDate.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temperature.textContent = '98°';

    header.classList.add('header');
    showDate.classList.add('date');
    temperature.classList.add('temp');

    header.appendChild(showDate);
    header.appendChild(title);
    header.appendChild(temperature);
    entryPoint.appendChild(header);

    // entryPoint.appendChild(header);
    return header;
}
// const headerTabs = document.querySelector('.header-container');

entryPoint.appendChild(HeaderCreator());
