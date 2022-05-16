import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

const [contactSelected, setContactSelected] = useState(false);

function App() {
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food truck, and other commercial projects",
    },
    {
      name: "portraits",
      description: "Portraits of people in my life",
    },
    {
      name: "food",
      description: "Delicious delicacies",
    },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
        )}
        {/* above is equivalent to an if/else statement ?=if :=else*/}
      </main>
    </div>
  );
}

export default App;
