import "./App.css";
import { categories } from "./data/categories";
import { NavigationLayout } from "./NavigationLayout/NavigationLayout";

function App() {
  return (
    <NavigationLayout
      title="List of subscribed subcategories"
      items={categories.map((item) => ({
        title: item.description.title,
        id: item.id,
        onClick: () => {},
      }))}
    >
      <ol>
        <li>
          After clicking on a given category, a list of subscribed subcategories
          (have is_subscribed set to true) should be displayed here.
        </li>
        <li>
          If a given category does not have any subscribed subcategories,
          display the message: "No results found."
        </li>
      </ol>
    </NavigationLayout>
  );
}

export default App;
