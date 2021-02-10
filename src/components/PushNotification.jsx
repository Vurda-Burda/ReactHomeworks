import React from 'react';

class PushNotification extends React.Component {
    render() {
        return <div className="push">
            <img className="push__image" src="/images/push-off.png" alt="Push Notification"/>
            {/* <button className="push__image">Push Notification</button> */}
        </div>;
    }
};

export default PushNotification;