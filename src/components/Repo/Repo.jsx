import { Avatar, Text, Icon } from "src/components/common";
import s from "./Repo.module.css";
import avatarDefault from "src/assets/images/avatarDefault.png";
import { memo } from "react";

const BLANK_FIELD = "-";

// cannot set here items by default since if the value is empty it's null
export const Repo = memo(
  ({ name, author, language, image, description, stars, watchers }) => {
    return (
      <div className={s.content}>
        <div className={s.left}>
          <Avatar src={image || avatarDefault} alt="Authors image" />
          <div className={s.info}>
            <Text size="big">{name || BLANK_FIELD}</Text>
            <Text color="lightGrey">{author || BLANK_FIELD}</Text>
            <Text color="lightGrey">{language || BLANK_FIELD}</Text>
            <Text color="grey">{description || BLANK_FIELD}</Text>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.textWithIcon}>
            <Icon type="star" />
            <Text>{stars} stars</Text>
          </div>
          <div className={s.textWithIcon}>
            <Icon type="watcher" />
            <Text>{watchers} watchers</Text>
          </div>
        </div>
      </div>
    );
  }
);
