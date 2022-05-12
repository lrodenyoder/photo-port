import React from 'react';

function Nav() {
    const categories = [
        {
            name: "Commercial",
            description: "Photos of grocery stores, food truck, and other commercial projects",
        },
        {
            name: "Portraits",
            description: "Portraits of people in my life"
        },
        {
            name: "Food",
            description: "Delicious delicacies"
        },
        {
            name: "Landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature"
        }
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header>
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        //when mapping in JSX, outermost element must have key attribute set to something unique. Helps keep track of items in virtual DOM. Return only one JSX element with each callback
                        <li className="mx-1"
                            key={category.name}>
                            {/* if written categorySelected(category.name), the function would be called on render as well as click */}
                            <span onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;