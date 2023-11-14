const Navdata = [
  {
    label: "Main",
    isHeader: true,
  },
  {
    id: "dashboard",
    label: "Dashboard",
    link: "/dashboard",
    icon: "ri-home-3-line",
  },
  {
    id: "ranking",
    label: "Ranking",
    link: "/ranking",
    icon: "ri-bar-chart-2-fill",
  },
  {
    id: "events",
    label: "Events",
    link: "/events",
    icon: "ri-calendar-event-fill",
  },
  {
    id: "players",
    label: "Players",
    link: "/players",
    icon: "ri-team-line",
  },
  {
    id: "results",
    label: "Results",
    link: "/results",
    icon: "ri-trophy-line",
  },
  {
    label: "Academy",
    isHeader: true,
  },
  {
    id: "courses",
    label: "Courses",
    link: "/learning/courses",
    icon: "ri-graduation-cap-line",
  },
  {
    id: "schedule",
    label: "Schedule",
    link: "/learning/schedule",
    icon: "ri-calendar-todo-line",
  },
  {
    label: "Content",
    isHeader: true,
  },
  {
    id: "vods",
    label: "VODs",
    link: "/content/vods",
    icon: "ri-movie-fill",
  },
  {
    id: "streams",
    label: "Streams",
    link: "/content/streams",
    icon: "ri-live-line",
  },
  {
    id: "review",
    label: "Review",
    link: "/content/review",
    icon: "ri-movie-2-line",
  },

  {
    label: "Market",
    isHeader: true,
  },
  {
    id: "exchange",
    label: "Exchange",
    link: "/exchange",
    icon: "ri-store-2-line",
  },
  {
    id: "rewards",
    label: "Rewards",
    link: "/rewards",
    icon: "ri-gift-line",
  },
  {
    label: "Misc",
    isHeader: true,
  },
  {
    id: "authentication",
    label: "Authentication",
    icon: "ri-account-circle-line",
    link: "/#",
    stateVariables: "isAuth",
    subItems: [
      {
        id: "signIn",
        label: "Sign In",
        link: "/#",
        isChildItem: true,
        stateVariables: "isSignIn",
        childItems: [
          {
            id: "signin-basic",
            label: "Basic",
            link: "/authenticationInner/login/auth-signin-basic",
          },
          {
            id: "signin-cover",
            label: "Cover",
            link: "/authenticationInner/login/auth-signin-cover",
          },
        ],
      },
      {
        id: "signUp",
        label: "Sign Up",
        link: "/#",
        isChildItem: true,
        stateVariables: "isSignUp",
        childItems: [
          {
            id: "signup-basic",
            label: "Basic",
            link: "/authenticationInner/register/auth-signup-basic",
          },
          {
            id: "signup-cover",
            label: "Cover",
            link: "/authenticationInner/register/auth-signup-cover",
          },
        ],
      },
      {
        id: "passwordReset",
        label: "Password Reset",
        link: "/#",
        isChildItem: true,
        stateVariables: "isPasswordReset",
        childItems: [
          {
            id: "pass-reset-basic",
            label: "Basic",
            link: "/authenticationInner/passwordreset/auth-pass-reset-basic",
          },
          {
            id: "pass-reset-cover",
            label: "Cover",
            link: "/authenticationInner/passwordreset/auth-pass-reset-cover",
          },
        ],
      },
      {
        id: "passwordCreate",
        label: "Password Create",
        link: "/#",
        isChildItem: true,
        parentId: "authentication",
        stateVariables: "isPasswordCreate",
        childItems: [
          {
            id: 1,
            label: "Basic",
            link: "/authenticationInner/passwordcreate/auth-pass-change-basic",
          },
          {
            id: 2,
            label: "Cover",
            link: "/authenticationInner/passwordcreate/auth-pass-change-cover",
          },
        ],
      },
      {
        id: "lockScreen",
        label: "Lock Screen",
        link: "/#",
        isChildItem: true,
        stateVariables: "isLockScreen",
        childItems: [
          {
            id: "lockscreen-basic",
            label: "Basic",
            link: "/authenticationInner/lockscreen/auth-lockscreen-basic",
          },
          {
            id: "lockscreen-cover",
            label: "Cover",
            link: "/authenticationInner/lockscreen/auth-lockscreen-cover",
          },
        ],
      },
      {
        id: "logout",
        label: "Logout",
        link: "/#",
        isChildItem: true,
        stateVariables: "isLogout",
        childItems: [
          {
            id: "logout-basic",
            label: "Basic",
            link: "/authenticationInner/logout/auth-logout-basic",
          },
          {
            id: "logout-cover",
            label: "Cover",
            link: "/authenticationInner/logout/auth-logout-cover",
          },
        ],
      },
      {
        id: "successMessage",
        label: "Success Message",
        link: "/#",
        isChildItem: true,
        stateVariables: "isSuccessMessage",
        childItems: [
          {
            id: "success-msg-basic",
            label: "Basic",
            link: "/authenticationInner/successmessage/auth-success-msg-basic",
          },
          {
            id: "success-msg-cover",
            label: "Cover",
            link: "/authenticationInner/successmessage/auth-success-msg-cover",
          },
        ],
      },
      {
        id: "twoStepVerification",
        label: "Two Step Verification",
        link: "/#",
        isChildItem: true,
        stateVariables: "isVerification",
        childItems: [
          {
            id: "twostep-basic",
            label: "Basic",
            link: "/authenticationInner/twostepverification/auth-twostep-basic",
          },
          {
            id: "twostep-cover",
            label: "Cover",
            link: "/authenticationInner/twostepverification/auth-twostep-cover",
          },
        ],
      },
      {
        id: "errors",
        label: "Errors",
        link: "/#",
        isChildItem: true,
        stateVariables: "isError",
        childItems: [
          {
            id: "404-basic",
            label: "404 Basic",
            link: "/authenticationInner/errors/auth-404-basic",
          },
          {
            id: "404-cover",
            label: "404 Cover",
            link: "/authenticationInner/errors/auth-404-cover",
          },
          {
            id: "404-alt",
            label: "404 Alt",
            link: "/authenticationInner/errors/auth-404-alt",
          },
          {
            id: "auth-500",
            label: "500",
            link: "/authenticationInner/errors/auth-500",
          },
          {
            id: "auth-offline",
            label: "Offline Page",
            link: "/authenticationInner/errors/auth-offline",
          },
        ],
      },
    ],
  },
];

const MOCK_DATA = {
  Navdata,
};

export default MOCK_DATA;
