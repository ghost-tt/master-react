import React from 'react';
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';
import { faker } from "@faker-js/faker";
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 2:00AM"
                    comment="Nice blog Post!!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 4:00PM"
                    comment="Great post"
                    avatar={faker.image.avatar()}

                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesteraday at 8:00PM"
                    comment="Pleasure to read"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);