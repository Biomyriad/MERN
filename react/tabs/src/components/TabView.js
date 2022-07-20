import {useState} from 'react'
import styles from './TabView.module.css'
import Tab from './Tab'
import TabContent from './TabContent'

export default function TabView(props) {

    const [tabs, setTabs] = props.tabCollection;
    const [selectedTab, setSelectedTab] = useState(0);
    const [currentTab, setCurrentTab] = useState(tabs[0].component);

const changeTab = (index) => {
    setSelectedTab(index)
    setCurrentTab(tabs[index].component)
}

    return (
        <div className={styles.TabView}>
            <div className={styles.tabCollection}>
                {
                    tabs.map((value, index) => <Tab key={index} tabName={value.tabName} selected={selectedTab==index} onClick={ () => changeTab(index) }/> )
                }
            </div>
            
            <TabContent component={currentTab}/>
            
        </div>
    )
}
