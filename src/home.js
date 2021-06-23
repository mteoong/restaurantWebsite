function home() {
    /*
    addToolbar();
    const mainContent = document.createElement('div');
    mainContent.classList.add("main-content", "wrapper");
    document.body.append(mainContent);

    const main = document.createElement('div');
    main.classList.add("main");
    mainContent.append(main);

    const h1 = document.createElement('h1');
    h1.classList.add("main");
    h1.innerText = "Happy to Serve!";
    main.append(h1);

    const h2 = document.createElement('h2');
    h2.classList.add("main");
    h2.innerText = "Recycled Ingredients";
    main.append(h2);

    const order = document.createElement('div');
    order.classList.add("order");
    order.innerText = "Order Now";
    main.append(order);
    */
}

function addToolbar() {
    const header = document.createElement('header');
    document.body.append(header);
    
    const h1 = document.createElement('h1');
    h1.innerText = "Restaurant Yukihira";
    h1.classList.add("logo");
    header.append(h1);

    const hr = document.createElement('hr');
    header.append(hr);

    const div = document.createElement('div');
    div.classList.add("toolbar");
    header.append(div);

    const home = document.createElement('span');
    home.innerText = "Home";
    home.classList.add("nav-bar");
    home.setAttribute('id', 'home')
    div.append(home);

    const menu = document.createElement('span');
    menu.innerText = "Menu";
    menu.classList.add("nav-bar");
    menu.setAttribute('id', 'menu')
    div.append(menu);

    const contact = document.createElement('span');
    contact.innerText = "Contact";
    contact.classList.add("nav-bar");
    contact.setAttribute('id', 'contact')
    div.append(contact);
}

export { home };