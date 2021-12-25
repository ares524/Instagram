import { StatusBar } from "./Stories.module";
import { Avatar } from "@chakra-ui/react";
import styles from "../../styles/components/Stories/Index.module.css";
const StoriesList = [
  {
    name: "Your Story",
    avatar: "profile.png",
  },
  {
    name: "Terry Lucas",
    avatar: "profile.png",
  },
  {
    name: "Terry Lucas",
    avatar: "profile.png",
  },
  {
    name: "Terry Lucas",
    avatar: "profile.png",
  },
  // make 10 more entries
  {
    name: "Terry Lucas",
    avatar: "profile.png",
  },
  {
    name: "Terry Lucas",
    avatar: "profile.png",
  },
  {
    name: "Terry Lucas",
    avatar: "profile.png",
  },
  {
    name: "Terry Lucas",
    avatar: "profile.png",
  },
  {
    name: "Terry Lucas",
    avatar: "profile.png",
  },
  {
    name: "Terry Lucas",
    avatar: "profile.png",
  },
  {
    name: "Terry Lucas",
    avatar: "profile.png",
  },
  {
    name: "Terry Lucas",
    avatar: "profile.png",
  },
  {
    name: "Terry Lucas",
    avatar: "profile.png",
  },
  {
    name: "Terry Lucas",
    avatar: "profile.png",
  },
  {
    name: "Terry Lucas",
    avatar: "profile.png",
  },
  {
    name: "Terry Lucas",
    avatar: "profile.png",
  },
  {
    name: "Terry Lucas",
    avatar: "profile.png",
  },
];

function Stories() {
  return (
    <>
      <StatusBar className={styles.stories}>
        {StoriesList
          ? StoriesList.map((story, index) => {
              return (
                <Avatar
                  name={story.name}
                  src={story.avatar}
                  key={index}
                  style={{
                    width: 56,
                    height: 56,
                    boxShadow: `0 0 0 2px red`,
                    padding:'2px',
                    backgroundColor:"transparent"
                  }}
                />
              );
            })
          : null}
      </StatusBar>
    </>
  );
}
export default Stories;
