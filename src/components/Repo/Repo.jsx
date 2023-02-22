import { Avatar, Text, Icon } from "src/components/common";
import s from "./Repo.module.css";
import avatarDefault from "src/assets/images/avatarDefault.png";
import { memo } from "react";

export const Repo = memo(
  ({
    name = "-",
    author = "-",
    language = "-",
    image = avatarDefault,
    description = "-",
    stars = 0,
    watchers = 0,
  }) => {
    return (
      <div className={s.content}>
        <div className={s.left}>
          <Avatar src={image} alt="Authors image" />
          <div className={s.info}>
            <Text size="big">{name}</Text>
            <Text color="lightGrey">{author}</Text>
            <Text color="lightGrey">{language}</Text>
            <Text color="grey">{description}</Text>
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
