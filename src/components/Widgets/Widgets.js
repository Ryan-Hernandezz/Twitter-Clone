import { Search } from "@material-ui/icons";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
        <div className="widgets_input">
            <Search className="widgets_searchIcon" />
            <input placeholder="Search " type="text" />
        </div>
        <div className="widgets_widgetContainer">
            <h2>What's Happening</h2>
            <TwitterTweetEmbed tweetId={"1540322389153955840"} />
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="oceana"
                options={{height: 400}}
            />
            <TwitterShareButton 
                url={"https://www.rdhlab.com/"}
                options={{text: "Software Developer"}}
            />
        </div>
    </div>
  );
}

export default Widgets;
