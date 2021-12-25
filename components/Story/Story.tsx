import {
  Story as StoryContainer,
  StoryTitle,
  StoryStatsContainer,
  StoryStats,
  StoryPopularityStats,
} from "./Story.module";
import styles from "../../styles/components/Story/Index.module.css";
import { Story } from "../../types";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaRegSmile } from "react-icons/fa";
import { Logo } from "../Header/Header.module";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";

function Story({
  name,
  avatar,
  likes,
  comments,
  shares,
  timestamp,
  image,
  caption,
}: Story) {
  const [comment, setComment] = useState("");
  return (
    <>
      <StoryContainer>
        <StoryTitle>
          <img src={avatar} alt={name} className={styles.storyTitleImage} />
          <h3 className={styles.username}>{name}</h3>
          <div className={styles.moreIconDiv}>
            <FiMoreHorizontal size={25} />
          </div>
        </StoryTitle>
        <img src={image} alt={caption} className={styles.storyImage} />
        <StoryStatsContainer>
          <StoryStats>
            <Logo>
              <img
                src="./Vectorheart.png"
                alt="logo"
                style={{ width: 24, height: 21 }}
              />
            </Logo>
            <Logo>
              <img
                src="./Vectorcomments.png"
                alt="logo"
                style={{ width: 23, height: 23 }}
              />
            </Logo>
            <Logo>
              <img
                src="./Vectorshare.png"
                alt="logo"
                style={{ width: 24, height: 21 }}
              />
            </Logo>
            <div className={styles.saveIcon}>
              <Logo>
                <img src="./Vectorsave.png" alt="logo" />
              </Logo>
            </div>
          </StoryStats>
          <StoryPopularityStats>
            <p>{likes} Likes</p>
            <p>
              <span className={styles.captionUsername}>{name}</span>
              {caption}
            </p>
            <p className={styles.comments}>View all {comments} comments</p>
            <p className={styles.comments}>{timestamp}</p>
            <InputGroup>
              <InputLeftElement>
                <FaRegSmile size={20} />
              </InputLeftElement>
              <Input
                placeholder="Add a comment..."
                value={comment}
                onChange={(event) => {
                  setComment(event.target.value);
                }}
              />
              <InputRightElement>
                <span
                  className={comment ? styles.activePostSpan : styles.postSpan}
                >
                  Post
                </span>
              </InputRightElement>
            </InputGroup>
          </StoryPopularityStats>
        </StoryStatsContainer>
      </StoryContainer>
    </>
  );
}
export default Story;
