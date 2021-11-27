# Twitter Clone Poroject

## Create REact Application
```sh
    npx create-react-app twitter-clone
```

## Add Material UI 

```sh
    $ npm install @material-ui/core
    $ npm install @material-ui/icons
```

## Set Global Varriable & Use This:

```sh
Set:
body{
  --twitter-color:#1DA1F2;
  --twitter-background:#E8F5FE;
}
Use:
    color: var(--twitter-color);
```
## Add class depending on Conditional props

```sh
        <div className={`sideBarOption ${active && 'sideBarOption--active'}`}>
```

## Hide Scrollbar from Chrome, Safari, Opera:

```sh
    .div::-webkit-scrollbar{
        display:none;
    }
```

## Hide Scrollbar from IE, Edge, Firefox:

```sh
    .div{
        -ms-overflow-style:none; /IE and Edge
        scrollbar-width:none;   /Firefox
    }
```

## Twitter EmBed Plugin

```sh
    Command: npm install --save react-twitter-embed
    Use:
    import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed'



    <TwitterTweetEmbed tweetId='1337268250778824704'/>

    <TwitterTimelineEmbed
    sourceType="profile"
    screenName="pronazmul"
    options={{height:400}}
    />

    <TwitterShareButton
    url={"https//twitter.com/pronazmul"}
    />

```

## Commands For Firebase:
```sh
    installation Command: npm i firebase
    install Firebase CLI:  npm install -g firebase-tools
    Sign in to Google: firebase login
    Initiate your project: firebase init
    When you’re ready, deploy your web app: firebase deploy

    Copy Firebase SDK and inport To you Files
```