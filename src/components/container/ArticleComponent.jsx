import React from 'react'
import { BiBookmarks } from "react-icons/bi";
import { RiChat1Line } from "react-icons/ri";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

const ArticleComponent = ({articles }) => {

  const {
    title,
    url,
    comments_count,
    public_reactions_count,
    published_timestamp,
    reading_time_minutes,
    tag_list,
    cover_image,
    user,
  } = articles;
  

  return (
    <article className="article">
      {cover_image && (
        <a
          href={url}
          className="article__image"
          style={{
            backgroundImage: `url(${cover_image})`,
          }}
        >
          &nbsp;
        </a>
      )}

      <div className="articleDetails">
        <div className="writer-data">
          <div className="user-profile">
            <img src={user.profile_image_90} alt="user-image" />
          </div>
          <div className="user-info">
            <div>
              <a href={`http://dev.to/${user.name}`}>
                <span className="user-name">{user.name} &nbsp;</span>
              </a>
            </div>
            <div>
              <a href={url}>
                <small className="timestamp">
                  {new Date(published_timestamp).toLocaleDateString(undefined, {
                    day: "numeric",
                    month: "long",
                  })}
                  &nbsp; ({dayjs(published_timestamp).fromNow()})
                </small>
              </a>
            </div>
          </div>
        </div>

        <div className="writer-details">
          <a href={url}>
            <h2>{title}</h2>
          </a>
          <div className="tags">
            {tag_list.map((tag, key) => {
              return (
                <a key={key} href={`https://dev.to/t/${tag}`}>
                  <span>#{tag}</span>
                </a>
              );
            })}
          </div>

          <div className="additional-info">
            <div className="reactions">
              {public_reactions_count > 0 && (
                <div className="reactions-info">
                  <div className="icons-container">
                    <span className="crayons_icon_container">
                      <img
                        src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg
"
                        alt="Raised Hands"
                        width="18"
                        height="18"
                      />
                    </span>
                    <span className="crayons_icon_container">
                      <img
                        src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                        alt="Raised Hands"
                        width="18"
                        height="18"
                      />
                    </span>
                    <span className="crayons_icon_container">
                      <img
                        src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                        alt="Raised Hands"
                        width="18"
                        height="18"
                      />
                    </span>

                    <span className="crayons_icon_container">
                      <img
                        src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                        alt="Raised Hands"
                        width="18"
                        height="18"
                      />
                    </span>
                    <span className="crayons_icon_container">
                      <img
                        src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                        alt="Raised Hands"
                        width="18"
                        height="18"
                      />
                    </span>
                  </div>

                  <a href="">
                    <span className="hidden">
                      {public_reactions_count} &nbsp; Reactions
                    </span>
                  </a>
                </div>
              )}

              <a href={url}>
                <div className="comments">
                  {comments_count > 0 ? (
                    <span>
                      <i>
                        <RiChat1Line />
                      </i>
                      {comments_count}
                      <p className="hidden">Comments</p>
                    </span>
                  ) : (
                    <span>
                      <i>
                        <RiChat1Line />
                      </i>
                      <p className="hidden">Add a Comments</p>
                    </span>
                  )}
                </div>
              </a>
            </div>

            <div className="save">
              <small>
                {reading_time_minutes} <span>min read</span>
              </small>
              <i>
                <BiBookmarks />
              </i>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ArticleComponent