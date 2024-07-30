import QtQuick 2.15
import QtQuick.Controls 2.15

// Asked by CHATGPT
ApplicationWindow {
    visible: true
    width: 800
    height: 600
    title: "Complex QML in One File"

    Rectangle {
        id: mainRect
        width: 800
        height: 600
        color: "white"

        // Define a custom component within the same file
        Component {
            id: customButtonComponent

            Button {
                id: customButton
                width: 100
                height: 50
                text: "Click Me"
                font.bold: true
                background: Rectangle {
                    color: "lightblue"
                    radius: 10
                    border.color: "black"
                    border.width: 2
                }
                MouseArea {
                    anchors.fill: parent
                    onClicked: {
                        customAnimation.start()
                    }
                }
            }
        }

        // Use the custom component
        Loader {
            id: buttonLoader
            sourceComponent: customButtonComponent
            anchors.centerIn: parent
        }

        // Animation for the custom button
        SequentialAnimation {
            id: customAnimation
            running: false
            NumberAnimation {
                target: buttonLoader.item
                property: "width"
                from: 100
                to: 150
                duration: 300
            }
            NumberAnimation {
                target: buttonLoader.item
                property: "height"
                from: 50
                to: 75
                duration: 300
            }
            RotationAnimation {
                target: buttonLoader.item
                property: "rotation"
                from: 0
                to: 360
                duration: 600
            }
            ParallelAnimation {
                NumberAnimation {
                    target: buttonLoader.item
                    property: "opacity"
                    from: 1
                    to: 0.5
                    duration: 300
                }
                ColorAnimation {
                    target: buttonLoader.item.background
                    property: "color"
                    from: "lightblue"
                    to: "lightcoral"
                    duration: 300
                }
            }
        }

        // Additional Rectangle to show state management
        Rectangle {
            id: stateRect
            width: 200
            height: 200
            color: "lightgray"
            anchors.bottom: parent.bottom
            anchors.right: parent.right
            anchors.margins: 20

            states: State {
                name: "expanded"
                PropertyChanges {
                    target: stateRect
                    width: 400
                    height: 400
                    color: "lightgreen"
                }
            }

            transitions: Transition {
                from: ""
                to: "expanded"
                ParallelAnimation {
                    NumberAnimation {
                        target: stateRect
                        property: "width"
                        duration: 500
                    }
                    NumberAnimation {
                        target: stateRect
                        property: "height"
                        duration: 500
                    }
                    ColorAnimation {
                        target: stateRect
                        property: "color"
                        duration: 500
                    }
                }
            }

            MouseArea {
                anchors.fill: parent
                onClicked: {
                    stateRect.state = (stateRect.state === "expanded") ? "" : "expanded"
                }
            }
        }
    }
}
