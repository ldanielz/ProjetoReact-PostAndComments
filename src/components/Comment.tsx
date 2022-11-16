import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface ICommentProps {
  content: string,
  onDeleteComment: (comment: string) => void,
}

export function Comment({ content, onDeleteComment }: ICommentProps) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    //setLikeCount(likeCount + 1)
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/ldanielz.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Daniel Zenteno</strong>
              <time
                title="13 de Novembro às 23:35h"
                dateTime="2022-12-13 23:35:52"
              >
                Publicado ha 1h
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentario"><Trash size={24} /></button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
