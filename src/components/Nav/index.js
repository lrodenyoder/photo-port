import React, {useEffect} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name)
    }, [currentCategory])

    return (
        <header className='flex-row px-1'>
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">📸</span>{""} Oh Snap!
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
                        <li className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'
                        }`}
                            key={category.name}>
                            {/* if written categorySelected(category.name), the function would be called on render as well as click */}
                            <span onClick={() => setCurrentCategory(category)}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;