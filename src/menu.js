function menu() {
    const wrapper = document.querySelector(".wrapper")
    wrapper.remove();

    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add("wrapper", "menu-wrapper");
    document.body.append(menuWrapper);

    const title = document.createElement('h1');
    title.classList.add("title");
    title.innerText = "MENU";
    menuWrapper.append(title);

    const mainMenu = document.createElement('div');
    mainMenu.classList.add("main-menu");
    menuWrapper.append(mainMenu);

    const preview = document.createElement('div');
    preview.classList.add("dish-preview");
    mainMenu.append(preview);

    const dishes = document.createElement('ul');
    dishes.classList.add("dishes");
    mainMenu.append(dishes);

    const furikake = document.createElement('li');
    furikake.innerText = "Transforming Furikake Gohan";
    furikake.setAttribute('id', 'furikake');
    furikake.addEventListener('mouseover', createHoverFunction('furikake'));
    dishes.append(furikake);

    const rainbow = document.createElement('li');
    rainbow.innerText = "Rainbow Terrine";
    rainbow.setAttribute('id', 'furikake');
    rainbow.addEventListener('mouseover', createHoverFunction('rainbow'));
    dishes.append(rainbow);

    const steak = document.createElement('li');
    steak.innerText = "Chaliapin Steak Don";
    steak.setAttribute('id', 'steak');
    steak.addEventListener('mouseover', createHoverFunction('steak'));
    dishes.append(steak);

    const pork = document.createElement('li');
    pork.innerText = "Roast Pork, Just Kidding";
    pork.setAttribute('id', 'pork');
    pork.addEventListener('mouseover', createHoverFunction('pork'));
    dishes.append(pork);

    const kaarage = document.createElement('li');
    kaarage.innerText = "Sumire Karaage Roll";
    kaarage.setAttribute('id', 'karaage');
    kaarage.addEventListener('mouseover', createHoverFunction('karaage'));
    dishes.append(kaarage);

    const ramen = document.createElement('li');
    ramen.innerText = "Joichiro Special Rich Ramen";
    ramen.setAttribute('id', 'ramen');
    ramen.addEventListener('mouseover', createHoverFunction('ramen'));
    dishes.append(ramen);

    const gyoza = document.createElement('li');
    gyoza.innerText = "Cheese-Feathered Hanetsuki Gyoza";
    gyoza.setAttribute('id', 'gyoza');
    gyoza.addEventListener('mouseover', createHoverFunction('gyoza'));
    dishes.append(gyoza);

    const tempura = document.createElement('li');
    tempura.innerText = "Chicken Egg Tempura Don";
    tempura.setAttribute('id', 'tempura');
    tempura.addEventListener('mouseover', createHoverFunction('tempura'));
    dishes.append(tempura);

    const risotto = document.createElement('li');
    risotto.innerText = "Apple Risotto";
    risotto.setAttribute('id', 'risotto');
    risotto.addEventListener('mouseover', createHoverFunction('risotto'));
    dishes.append(risotto);
}

function createHoverFunction (id) {
    const preview = document.querySelector('.dish-preview');
    let emptyFunc = () => preview.setAttribute('id', id);
    return emptyFunc;
}

export {menu};