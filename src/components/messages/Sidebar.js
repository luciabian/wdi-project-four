import React from 'react';
import { currentUserId } from '../../lib/auth';

function messagesInConversation(obj, message) {
  const otherUser = message.to._id === currentUserId() ?
    message.from : message.to;
  if (!obj[otherUser._id]) {
    obj[otherUser._id] = {
      user: otherUser, count: 1
    };
  } else obj[otherUser._id].count++;
  return obj;
}

function Sidebar({ messages, handleClick }) {
  const messageCounts = messages &&
    messages.reduce(messagesInConversation, {});
  return (
    <div>
      {messageCounts &&
          Object.keys(messageCounts)
            .map(userId =>
              <div key={userId} className="media"
                onClick={() => handleClick(userId)}>
                <div className="media-content">
                  <div className="content">
                    <strong>{messageCounts[userId].user.username}</strong> ({messageCounts[userId].count})
                  </div>
                </div>
              </div>
            )
      }
    </div>
  );
}

export default Sidebar;
