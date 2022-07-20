import {useState} from 'react'
import styles from './App.module.css'
import TabView from './components/TabView'
import TestComp from './components/ParagraphComponent'
import FormComponent from './components/FormComponent'

export default function App() {

const tab1 = {
  tabName: "Infomation Tab",
  component: <TestComp info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices porttitor ex, sit amet fermentum sem tempus in. Aliquam erat volutpat. Quisque condimentum purus non fermentum sodales. Ut facilisis tristique mauris sed iaculis. Nunc massa orci, eleifend dignissim libero non, posuere fringilla justo. Nam magna augue, auctor ac odio nec, dignissim placerat velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu tincidunt nisi. Pellentesque id rutrum ipsum. Aenean lobortis venenatis tellus, ac luctus lacus volutpat eu. Ut pulvinar erat magna, vitae mollis tortor lobortis id. Praesent vitae augue sed lectus placerat commodo. Duis accumsan et ex vel tincidunt. Maecenas eu eros interdum, consequat odio eu, dictum leo. Ut rhoncus ut lorem vel euismod. Suspendisse tempor mauris sit amet nisi tempor tempor."}/>
}

const tab2 = {
  tabName: "Form Test Tab",
  component: <FormComponent key={123}/>
}

const tab3 = {
  tabName: "Added Tab",
  component: <TestComp info={"added tab component"}/>
}

const tabCollection = useState([tab1,tab2]);
const [tabs, setTabs] = tabCollection;

  return (
    <div className={styles.App}>

      <TabView tabCollection={tabCollection}/>
      <button onClick={() => setTabs([...tabs, tab3])}>ADD TAB</button>
      
    </div>
  )
}
