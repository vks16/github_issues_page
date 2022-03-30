declare namespace Issues {
    type Issue = {
        id: string;
        title: string;
        tag: IssueTag[];
        openedOn: string;
        closedOn: string;
        assignedTo: User[];
        openedBy: User;
        closedBy: User | null;
        comment: Comment[]
    };

    type IssueDetail = {
        id: number;
        title: string;
        body: string;
        attachments: string[];
        tag: IssueTag[];
        openedOn: string;
        closedOn: string | null;
        assignedTo: User[];
        openedBy: User;
        closedBy: User | null;
        comment: Comment[]
    };

    type IssueTag = {
        name: string;
        color: string;
    };

    type User = {
        id: number;
        name: string;
        profileImage: string;
    };

    type Comment = {
        id: number;
        body: string;
        commentedBy: User;
        createdAt: string;
    };

    type InitialState = {
        issues: IssueDetail[]
    };

}

declare namespace ReduxType {
    type action = {
        type: actionType;
        payload: any;
    };

    enum actionType {
        ADD_ISSUE = "ADD_ISSUE" ,
        REMOVE_ISSUE = "REMOVE_ISSUE",
        UPDATE_ISSUE = "UPDATE_ISSUE",
        ADD_COMMENT = "ADD_COMMENT"
    }
}

