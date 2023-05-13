import MyFirstComponent from './FirstComponent'
import ThirdComponent from './ThirdComponent'
import {MyFifthComponent} from './FirstComponent'
import LearningJavaScript from './LearningJavascript'

export default function LearningComponent() {
    return (
        <div className="LearningComponent">
            <MyFirstComponent></MyFirstComponent>
            <ThirdComponent></ThirdComponent>
            <MyFifthComponent></MyFifthComponent>
            <LearningJavaScript></LearningJavaScript>
        </div>
    );
}