
const initialState : Issues.InitialState = {
    issues: [
        {
            id: 790,
            title: "Gentler learning curve in docs",
            body: "Body",
            attachments: [],
            tag: [{
                name: "discussion",
                color: "rgb(212, 197, 249)"
            }, {
                name: "improvement",
                color: "rgb(197, 222, 245)"
            }],
            assignedTo: [],
            openedOn: "Oct 16, 2016",
            closedOn: null,
            openedBy: {
                id: 1,
                name: "chrisvfritz",
                profileImage: ""
            },
            closedBy: null,
            comment: [
                {
                    id: 1,
                    body: `As discussed in the team Slack, it may be a bit easier to learn concepts in this order:
                    Getting Started: Similar to how it is now, but update the default build in the template to the standalone version, then provide a specific tip for use in the official Webpack template. Also provide a note about the render function version for the run-time only build.
                    Managing Layouts: Introduce layout wrapper components
                    App-Level Control Component: (Is that a good name? I just made it up, but don't really like it.) Introduce an App component layer and explain what would go in a layout wrapper and what would go in App (and why)
                    Any additional thoughts/opinions? I'm happy to tackle this, as long as it can wait a week or so, which is when I might finally be able to get to it.`,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 1,
                        name: "chrisvfritz",
                        profileImage: ""
                    }
                },
                {
                    id: 1,
                    body: `Also integration with vuex`,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 2,
                        name: "anishdcruz",
                        profileImage: ""
                    }
                }
            ]
        },
        {
            id: 2110,
            title: "Optional parameters are dropped in named nested routes",
            body: "Body",
            attachments: [],
            tag: [{
                name: "discussion",
                color: "rgb(212, 197, 249)"
            },{
                name: "has PR",
                color: "rgb(83, 25, 231)"
            },  {
                name: "has workaround",
                color: "rgb(197, 222, 245)"
            },  {
                name: "need RFC",
                color: "rgb(242, 171, 218)"
            }],
            assignedTo: [],
            openedOn: "Oct 16, 2016",
            closedOn: null,
            openedBy: {
                id: 391,
                name: "wrrrn",
                profileImage: ""
            },
            closedBy: null,
            comment: [
                {
                    id: 1,
                    body: `
                    Version
3.0.1

Reproduction link
https://codepen.io/wrrrn/pen/GxqmOb
http://jsfiddle.net/7a31maev/1/

Steps to reproduce
I've linked to what the current router code is. The issue is simple, so I hope I'm missing something obvious.

What is expected?
When the :paramOptional is set, and child route is pushed to, the path will look as such -
'/search/paramOne/paramOptional/paramTwo/show-modal'

What is actually happening?
When navigated to, the child removes the paramOptional. The resulting url is -
'/search/paramOne/paramTwo/show-modal'
                    `,
                    createdAt: "Dec 20, 2022",
                    commentedBy: {
                        id: 1,
                        name: "wrrrn ",
                        profileImage: ""
                    }
                },
                {
                    id: 2,
                    body: `Adding a this.$router.push({name:'ShowModal', params: {paramOptional: this. paramOptionalData}}) fixes the issue but makes me sad.`,
                    createdAt: "Mar 16, 2018",
                    commentedBy: {
                        id: 1,
                        name: "wrrn",
                        profileImage: ""
                    }
                }
            ]
        },
        {
            id: 2243,
            title: "Allow a user to read and write state on history entries (history.state)",
            body: "Body",
            attachments: [],
            tag: [{
                name: "discussion",
                color: "rgb(212, 197, 249)"
            },{
                name: "has PR",
                color: "rgb(83, 25, 231)"
            }, ],
            assignedTo: [],
            openedOn: "Oct 16, 2016",
            closedOn: "Oct 16, 2016",
            openedBy: {
                id: 1,
                name: "Vishal",
                profileImage: ""
            },
            closedBy: null,
            comment: [
                {
                    id: 1,
                    body: `
                    What problem does this feature solve?
Mobile apps that want to save scroll position for elements besides window.

This would also allow the user to save whatever they want to history state. A project I'm working on now needs to keep track of what's "focused" per page and this seems like the correct place for it. It could also be a nice place for temporary form data. I'm sure there's a lot of use cases outside of this.

What does the proposed API look like?
I'm still thinking about it, though I think someone else thinking about it would be better. :)

I checked out react-router a bit and it looks like we can make state part of the Location object, so we can set it in $router.push|replace({...}) or next({...}) calls. They use an additional argument but we might not need to?

I took a quick look at react-router and it seems to allow for this: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md

Also, this seems to talk directly to the situation we're facing with scrolling:
https://reacttraining.com/react-router/web/guides/scroll-restoration

Also some additional reading: https://github.com/ReactTraining/history#properties

Hopefully this is useful and doesn't seem like useless rambling.


                    `,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 1,
                        name: "crswll",
                        profileImage: ""
                    }
                },
                {
                    id: 1,
                    body: `
                    My app relies on being able to associate extra state in the history that isn't in the URL and this prevents me from being able to use vue-router

react-router uses history, which does something like:

history.replaceState(
  {  key: createKey(),  state: 'user-provided state' },
  null,
);
and provides access to location something like:

const location = {
  pathname: window.location.pathname,
  search: window.location.search,
  hash: window.location.hash,
  state: history.state.state,
}
users aren't expected to access history.state directly, though I suppose you could


                    `,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 2,
                        name: "jnields",
                        profileImage: ""
                    }
                }
            ]
        },
        {
            id: 790,
            title: "Gentler learning curve in docs",
            body: "Body",
            attachments: [],
            tag: [{
                name: "discussion",
                color: "rgb(212, 197, 249)"
            }, {
                name: "improvement",
                color: "rgb(197, 222, 245)"
            }],
            assignedTo: [],
            openedOn: "Oct 16, 2016",
            closedOn: null,
            openedBy: {
                id: 1,
                name: "chrisvfritz",
                profileImage: ""
            },
            closedBy: null,
            comment: [
                {
                    id: 1,
                    body: `As discussed in the team Slack, it may be a bit easier to learn concepts in this order:
                    Getting Started: Similar to how it is now, but update the default build in the template to the standalone version, then provide a specific tip for use in the official Webpack template. Also provide a note about the render function version for the run-time only build.
                    Managing Layouts: Introduce layout wrapper components
                    App-Level Control Component: (Is that a good name? I just made it up, but don't really like it.) Introduce an App component layer and explain what would go in a layout wrapper and what would go in App (and why)
                    Any additional thoughts/opinions? I'm happy to tackle this, as long as it can wait a week or so, which is when I might finally be able to get to it.`,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 1,
                        name: "chrisvfritz",
                        profileImage: ""
                    }
                },
                {
                    id: 1,
                    body: `Also integration with vuex`,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 2,
                        name: "anishdcruz",
                        profileImage: ""
                    }
                }
            ]
        },
        {
            id: 2110,
            title: "Optional parameters are dropped in named nested routes",
            body: "Body",
            attachments: [],
            tag: [{
                name: "discussion",
                color: "rgb(212, 197, 249)"
            },{
                name: "has PR",
                color: "rgb(83, 25, 231)"
            },  {
                name: "has workaround",
                color: "rgb(197, 222, 245)"
            },  {
                name: "need RFC",
                color: "rgb(242, 171, 218)"
            }],
            assignedTo: [],
            openedOn: "Oct 16, 2016",
            closedOn: null,
            openedBy: {
                id: 391,
                name: "wrrrn",
                profileImage: ""
            },
            closedBy: null,
            comment: [
                {
                    id: 1,
                    body: `
                    Version
3.0.1

Reproduction link
https://codepen.io/wrrrn/pen/GxqmOb
http://jsfiddle.net/7a31maev/1/

Steps to reproduce
I've linked to what the current router code is. The issue is simple, so I hope I'm missing something obvious.

What is expected?
When the :paramOptional is set, and child route is pushed to, the path will look as such -
'/search/paramOne/paramOptional/paramTwo/show-modal'

What is actually happening?
When navigated to, the child removes the paramOptional. The resulting url is -
'/search/paramOne/paramTwo/show-modal'
                    `,
                    createdAt: "Dec 20, 2022",
                    commentedBy: {
                        id: 1,
                        name: "wrrrn ",
                        profileImage: ""
                    }
                },
                {
                    id: 2,
                    body: `Adding a this.$router.push({name:'ShowModal', params: {paramOptional: this. paramOptionalData}}) fixes the issue but makes me sad.`,
                    createdAt: "Mar 16, 2018",
                    commentedBy: {
                        id: 1,
                        name: "wrrn",
                        profileImage: ""
                    }
                }
            ]
        },
        {
            id: 2243,
            title: "Allow a user to read and write state on history entries (history.state)",
            body: "Body",
            attachments: [],
            tag: [{
                name: "discussion",
                color: "rgb(212, 197, 249)"
            },{
                name: "has PR",
                color: "rgb(83, 25, 231)"
            }, ],
            assignedTo: [],
            openedOn: "Oct 16, 2016",
            closedOn: "Oct 16, 2016",
            openedBy: {
                id: 1,
                name: "Vishal",
                profileImage: ""
            },
            closedBy: null,
            comment: [
                {
                    id: 1,
                    body: `
                    What problem does this feature solve?
Mobile apps that want to save scroll position for elements besides window.

This would also allow the user to save whatever they want to history state. A project I'm working on now needs to keep track of what's "focused" per page and this seems like the correct place for it. It could also be a nice place for temporary form data. I'm sure there's a lot of use cases outside of this.

What does the proposed API look like?
I'm still thinking about it, though I think someone else thinking about it would be better. :)

I checked out react-router a bit and it looks like we can make state part of the Location object, so we can set it in $router.push|replace({...}) or next({...}) calls. They use an additional argument but we might not need to?

I took a quick look at react-router and it seems to allow for this: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md

Also, this seems to talk directly to the situation we're facing with scrolling:
https://reacttraining.com/react-router/web/guides/scroll-restoration

Also some additional reading: https://github.com/ReactTraining/history#properties

Hopefully this is useful and doesn't seem like useless rambling.


                    `,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 1,
                        name: "crswll",
                        profileImage: ""
                    }
                },
                {
                    id: 1,
                    body: `
                    My app relies on being able to associate extra state in the history that isn't in the URL and this prevents me from being able to use vue-router

react-router uses history, which does something like:

history.replaceState(
  {  key: createKey(),  state: 'user-provided state' },
  null,
);
and provides access to location something like:

const location = {
  pathname: window.location.pathname,
  search: window.location.search,
  hash: window.location.hash,
  state: history.state.state,
}
users aren't expected to access history.state directly, though I suppose you could


                    `,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 2,
                        name: "jnields",
                        profileImage: ""
                    }
                }
            ]
        },
        {
            id: 790,
            title: "Gentler learning curve in docs",
            body: "Body",
            attachments: [],
            tag: [{
                name: "discussion",
                color: "rgb(212, 197, 249)"
            }, {
                name: "improvement",
                color: "rgb(197, 222, 245)"
            }],
            assignedTo: [],
            openedOn: "Oct 16, 2016",
            closedOn: null,
            openedBy: {
                id: 1,
                name: "chrisvfritz",
                profileImage: ""
            },
            closedBy: null,
            comment: [
                {
                    id: 1,
                    body: `As discussed in the team Slack, it may be a bit easier to learn concepts in this order:
                    Getting Started: Similar to how it is now, but update the default build in the template to the standalone version, then provide a specific tip for use in the official Webpack template. Also provide a note about the render function version for the run-time only build.
                    Managing Layouts: Introduce layout wrapper components
                    App-Level Control Component: (Is that a good name? I just made it up, but don't really like it.) Introduce an App component layer and explain what would go in a layout wrapper and what would go in App (and why)
                    Any additional thoughts/opinions? I'm happy to tackle this, as long as it can wait a week or so, which is when I might finally be able to get to it.`,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 1,
                        name: "chrisvfritz",
                        profileImage: ""
                    }
                },
                {
                    id: 1,
                    body: `Also integration with vuex`,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 2,
                        name: "anishdcruz",
                        profileImage: ""
                    }
                }
            ]
        },
        {
            id: 2110,
            title: "Optional parameters are dropped in named nested routes",
            body: "Body",
            attachments: [],
            tag: [{
                name: "discussion",
                color: "rgb(212, 197, 249)"
            },{
                name: "has PR",
                color: "rgb(83, 25, 231)"
            },  {
                name: "has workaround",
                color: "rgb(197, 222, 245)"
            },  {
                name: "need RFC",
                color: "rgb(242, 171, 218)"
            }],
            assignedTo: [],
            openedOn: "Oct 16, 2016",
            closedOn: null,
            openedBy: {
                id: 391,
                name: "wrrrn",
                profileImage: ""
            },
            closedBy: null,
            comment: [
                {
                    id: 1,
                    body: `
                    Version
3.0.1

Reproduction link
https://codepen.io/wrrrn/pen/GxqmOb
http://jsfiddle.net/7a31maev/1/

Steps to reproduce
I've linked to what the current router code is. The issue is simple, so I hope I'm missing something obvious.

What is expected?
When the :paramOptional is set, and child route is pushed to, the path will look as such -
'/search/paramOne/paramOptional/paramTwo/show-modal'

What is actually happening?
When navigated to, the child removes the paramOptional. The resulting url is -
'/search/paramOne/paramTwo/show-modal'
                    `,
                    createdAt: "Dec 20, 2022",
                    commentedBy: {
                        id: 1,
                        name: "wrrrn ",
                        profileImage: ""
                    }
                },
                {
                    id: 2,
                    body: `Adding a this.$router.push({name:'ShowModal', params: {paramOptional: this. paramOptionalData}}) fixes the issue but makes me sad.`,
                    createdAt: "Mar 16, 2018",
                    commentedBy: {
                        id: 1,
                        name: "wrrn",
                        profileImage: ""
                    }
                }
            ]
        },
        {
            id: 2243,
            title: "Allow a user to read and write state on history entries (history.state)",
            body: "Body",
            attachments: [],
            tag: [{
                name: "discussion",
                color: "rgb(212, 197, 249)"
            },{
                name: "has PR",
                color: "rgb(83, 25, 231)"
            }, ],
            assignedTo: [],
            openedOn: "Oct 16, 2016",
            closedOn: "Oct 16, 2016",
            openedBy: {
                id: 1,
                name: "Vishal",
                profileImage: ""
            },
            closedBy: null,
            comment: [
                {
                    id: 1,
                    body: `
                    What problem does this feature solve?
Mobile apps that want to save scroll position for elements besides window.

This would also allow the user to save whatever they want to history state. A project I'm working on now needs to keep track of what's "focused" per page and this seems like the correct place for it. It could also be a nice place for temporary form data. I'm sure there's a lot of use cases outside of this.

What does the proposed API look like?
I'm still thinking about it, though I think someone else thinking about it would be better. :)

I checked out react-router a bit and it looks like we can make state part of the Location object, so we can set it in $router.push|replace({...}) or next({...}) calls. They use an additional argument but we might not need to?

I took a quick look at react-router and it seems to allow for this: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md

Also, this seems to talk directly to the situation we're facing with scrolling:
https://reacttraining.com/react-router/web/guides/scroll-restoration

Also some additional reading: https://github.com/ReactTraining/history#properties

Hopefully this is useful and doesn't seem like useless rambling.


                    `,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 1,
                        name: "crswll",
                        profileImage: ""
                    }
                },
                {
                    id: 1,
                    body: `
                    My app relies on being able to associate extra state in the history that isn't in the URL and this prevents me from being able to use vue-router

react-router uses history, which does something like:

history.replaceState(
  {  key: createKey(),  state: 'user-provided state' },
  null,
);
and provides access to location something like:

const location = {
  pathname: window.location.pathname,
  search: window.location.search,
  hash: window.location.hash,
  state: history.state.state,
}
users aren't expected to access history.state directly, though I suppose you could


                    `,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 2,
                        name: "jnields",
                        profileImage: ""
                    }
                }
            ]
        },
        {
            id: 790,
            title: "Gentler learning curve in docs",
            body: "Body",
            attachments: [],
            tag: [{
                name: "discussion",
                color: "rgb(212, 197, 249)"
            }, {
                name: "improvement",
                color: "rgb(197, 222, 245)"
            }],
            assignedTo: [],
            openedOn: "Oct 16, 2016",
            closedOn: null,
            openedBy: {
                id: 1,
                name: "chrisvfritz",
                profileImage: ""
            },
            closedBy: null,
            comment: [
                {
                    id: 1,
                    body: `As discussed in the team Slack, it may be a bit easier to learn concepts in this order:
                    Getting Started: Similar to how it is now, but update the default build in the template to the standalone version, then provide a specific tip for use in the official Webpack template. Also provide a note about the render function version for the run-time only build.
                    Managing Layouts: Introduce layout wrapper components
                    App-Level Control Component: (Is that a good name? I just made it up, but don't really like it.) Introduce an App component layer and explain what would go in a layout wrapper and what would go in App (and why)
                    Any additional thoughts/opinions? I'm happy to tackle this, as long as it can wait a week or so, which is when I might finally be able to get to it.`,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 1,
                        name: "chrisvfritz",
                        profileImage: ""
                    }
                },
                {
                    id: 1,
                    body: `Also integration with vuex`,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 2,
                        name: "anishdcruz",
                        profileImage: ""
                    }
                }
            ]
        },
        {
            id: 2110,
            title: "Optional parameters are dropped in named nested routes",
            body: "Body",
            attachments: [],
            tag: [{
                name: "discussion",
                color: "rgb(212, 197, 249)"
            },{
                name: "has PR",
                color: "rgb(83, 25, 231)"
            },  {
                name: "has workaround",
                color: "rgb(197, 222, 245)"
            },  {
                name: "need RFC",
                color: "rgb(242, 171, 218)"
            }],
            assignedTo: [],
            openedOn: "Oct 16, 2016",
            closedOn: null,
            openedBy: {
                id: 391,
                name: "wrrrn",
                profileImage: ""
            },
            closedBy: null,
            comment: [
                {
                    id: 1,
                    body: `
                    Version
3.0.1

Reproduction link
https://codepen.io/wrrrn/pen/GxqmOb
http://jsfiddle.net/7a31maev/1/

Steps to reproduce
I've linked to what the current router code is. The issue is simple, so I hope I'm missing something obvious.

What is expected?
When the :paramOptional is set, and child route is pushed to, the path will look as such -
'/search/paramOne/paramOptional/paramTwo/show-modal'

What is actually happening?
When navigated to, the child removes the paramOptional. The resulting url is -
'/search/paramOne/paramTwo/show-modal'
                    `,
                    createdAt: "Dec 20, 2022",
                    commentedBy: {
                        id: 1,
                        name: "wrrrn ",
                        profileImage: ""
                    }
                },
                {
                    id: 2,
                    body: `Adding a this.$router.push({name:'ShowModal', params: {paramOptional: this. paramOptionalData}}) fixes the issue but makes me sad.`,
                    createdAt: "Mar 16, 2018",
                    commentedBy: {
                        id: 1,
                        name: "wrrn",
                        profileImage: ""
                    }
                }
            ]
        },
        {
            id: 2243,
            title: "Allow a user to read and write state on history entries (history.state)",
            body: "Body",
            attachments: [],
            tag: [{
                name: "discussion",
                color: "rgb(212, 197, 249)"
            },{
                name: "has PR",
                color: "rgb(83, 25, 231)"
            }, ],
            assignedTo: [],
            openedOn: "Oct 16, 2016",
            closedOn: "Oct 16, 2016",
            openedBy: {
                id: 1,
                name: "Vishal",
                profileImage: ""
            },
            closedBy: null,
            comment: [
                {
                    id: 1,
                    body: `
                    What problem does this feature solve?
Mobile apps that want to save scroll position for elements besides window.

This would also allow the user to save whatever they want to history state. A project I'm working on now needs to keep track of what's "focused" per page and this seems like the correct place for it. It could also be a nice place for temporary form data. I'm sure there's a lot of use cases outside of this.

What does the proposed API look like?
I'm still thinking about it, though I think someone else thinking about it would be better. :)

I checked out react-router a bit and it looks like we can make state part of the Location object, so we can set it in $router.push|replace({...}) or next({...}) calls. They use an additional argument but we might not need to?

I took a quick look at react-router and it seems to allow for this: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md

Also, this seems to talk directly to the situation we're facing with scrolling:
https://reacttraining.com/react-router/web/guides/scroll-restoration

Also some additional reading: https://github.com/ReactTraining/history#properties

Hopefully this is useful and doesn't seem like useless rambling.


                    `,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 1,
                        name: "crswll",
                        profileImage: ""
                    }
                },
                {
                    id: 1,
                    body: `
                    My app relies on being able to associate extra state in the history that isn't in the URL and this prevents me from being able to use vue-router

react-router uses history, which does something like:

history.replaceState(
  {  key: createKey(),  state: 'user-provided state' },
  null,
);
and provides access to location something like:

const location = {
  pathname: window.location.pathname,
  search: window.location.search,
  hash: window.location.hash,
  state: history.state.state,
}
users aren't expected to access history.state directly, though I suppose you could


                    `,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 2,
                        name: "jnields",
                        profileImage: ""
                    }
                }
            ]
        },
        {
            id: 790,
            title: "Gentler learning curve in docs",
            body: "Body",
            attachments: [],
            tag: [{
                name: "discussion",
                color: "rgb(212, 197, 249)"
            }, {
                name: "improvement",
                color: "rgb(197, 222, 245)"
            }],
            assignedTo: [],
            openedOn: "Oct 16, 2016",
            closedOn: null,
            openedBy: {
                id: 1,
                name: "chrisvfritz",
                profileImage: ""
            },
            closedBy: null,
            comment: [
                {
                    id: 1,
                    body: `As discussed in the team Slack, it may be a bit easier to learn concepts in this order:
                    Getting Started: Similar to how it is now, but update the default build in the template to the standalone version, then provide a specific tip for use in the official Webpack template. Also provide a note about the render function version for the run-time only build.
                    Managing Layouts: Introduce layout wrapper components
                    App-Level Control Component: (Is that a good name? I just made it up, but don't really like it.) Introduce an App component layer and explain what would go in a layout wrapper and what would go in App (and why)
                    Any additional thoughts/opinions? I'm happy to tackle this, as long as it can wait a week or so, which is when I might finally be able to get to it.`,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 1,
                        name: "chrisvfritz",
                        profileImage: ""
                    }
                },
                {
                    id: 1,
                    body: `Also integration with vuex`,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 2,
                        name: "anishdcruz",
                        profileImage: ""
                    }
                }
            ]
        },
        {
            id: 2110,
            title: "Optional parameters are dropped in named nested routes",
            body: "Body",
            attachments: [],
            tag: [{
                name: "discussion",
                color: "rgb(212, 197, 249)"
            },{
                name: "has PR",
                color: "rgb(83, 25, 231)"
            },  {
                name: "has workaround",
                color: "rgb(197, 222, 245)"
            },  {
                name: "need RFC",
                color: "rgb(242, 171, 218)"
            }],
            assignedTo: [],
            openedOn: "Oct 16, 2016",
            closedOn: null,
            openedBy: {
                id: 391,
                name: "wrrrn",
                profileImage: ""
            },
            closedBy: null,
            comment: [
                {
                    id: 1,
                    body: `
                    Version
3.0.1

Reproduction link
https://codepen.io/wrrrn/pen/GxqmOb
http://jsfiddle.net/7a31maev/1/

Steps to reproduce
I've linked to what the current router code is. The issue is simple, so I hope I'm missing something obvious.

What is expected?
When the :paramOptional is set, and child route is pushed to, the path will look as such -
'/search/paramOne/paramOptional/paramTwo/show-modal'

What is actually happening?
When navigated to, the child removes the paramOptional. The resulting url is -
'/search/paramOne/paramTwo/show-modal'
                    `,
                    createdAt: "Dec 20, 2022",
                    commentedBy: {
                        id: 1,
                        name: "wrrrn ",
                        profileImage: ""
                    }
                },
                {
                    id: 2,
                    body: `Adding a this.$router.push({name:'ShowModal', params: {paramOptional: this. paramOptionalData}}) fixes the issue but makes me sad.`,
                    createdAt: "Mar 16, 2018",
                    commentedBy: {
                        id: 1,
                        name: "wrrn",
                        profileImage: ""
                    }
                }
            ]
        },
        {
            id: 2243,
            title: "Allow a user to read and write state on history entries (history.state)",
            body: "Body",
            attachments: [],
            tag: [{
                name: "discussion",
                color: "rgb(212, 197, 249)"
            },{
                name: "has PR",
                color: "rgb(83, 25, 231)"
            }, ],
            assignedTo: [],
            openedOn: "Oct 16, 2016",
            closedOn: "Oct 16, 2016",
            openedBy: {
                id: 1,
                name: "Vishal",
                profileImage: ""
            },
            closedBy: null,
            comment: [
                {
                    id: 1,
                    body: `
                    What problem does this feature solve?
Mobile apps that want to save scroll position for elements besides window.

This would also allow the user to save whatever they want to history state. A project I'm working on now needs to keep track of what's "focused" per page and this seems like the correct place for it. It could also be a nice place for temporary form data. I'm sure there's a lot of use cases outside of this.

What does the proposed API look like?
I'm still thinking about it, though I think someone else thinking about it would be better. :)

I checked out react-router a bit and it looks like we can make state part of the Location object, so we can set it in $router.push|replace({...}) or next({...}) calls. They use an additional argument but we might not need to?

I took a quick look at react-router and it seems to allow for this: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md

Also, this seems to talk directly to the situation we're facing with scrolling:
https://reacttraining.com/react-router/web/guides/scroll-restoration

Also some additional reading: https://github.com/ReactTraining/history#properties

Hopefully this is useful and doesn't seem like useless rambling.


                    `,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 1,
                        name: "crswll",
                        profileImage: ""
                    }
                },
                {
                    id: 1,
                    body: `
                    My app relies on being able to associate extra state in the history that isn't in the URL and this prevents me from being able to use vue-router

react-router uses history, which does something like:

history.replaceState(
  {  key: createKey(),  state: 'user-provided state' },
  null,
);
and provides access to location something like:

const location = {
  pathname: window.location.pathname,
  search: window.location.search,
  hash: window.location.hash,
  state: history.state.state,
}
users aren't expected to access history.state directly, though I suppose you could


                    `,
                    createdAt: new Date().toLocaleString(),
                    commentedBy: {
                        id: 2,
                        name: "jnields",
                        profileImage: ""
                    }
                }
            ]
        }
    ]
}

const reducer = (state = initialState, action : ReduxType.action) => {
    const newState = {...state};
    switch (action.type) {
        case "ADD_ISSUE" :
            newState.issues = [...newState.issues, action.payload];
            break;
        case "REMOVE_ISSUE" :
            newState.issues.splice(newState.issues.map(e => e.id).indexOf(action.payload.id), 1);
            break;
        case "UPDATE_ISSUE" :
            newState.issues[newState.issues.map(e => e.id).indexOf(action.payload.id)] = action.payload;
            break;
        default:
    }

    return newState;
};

export default reducer;