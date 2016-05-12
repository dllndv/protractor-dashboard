function getData() {
  return [
            {name: 'Tree', url: 'tree', status: 'passed', icon: "icons:done-all", tests: [
              {name: 'it should pass this one', status: 'passed', icon: "icons:done", stacktrace: null},
              {name: 'it was good here too', status: 'passed', icon: "icons:done", stacktrace: null},
              {name: 'it had another good one', status: 'passed', icon: "icons:done", stacktrace: null}
            ]},
            {name: 'Memories', url: 'memories', status: 'passed', icon: "icons:done-all", tests: [
              {name: 'it should pass this one', status: 'passed', icon: "icons:done", stacktrace: null},
              {name: 'it was good here too', status: 'passed', icon: "icons:done", stacktrace: null},
              {name: 'it got skipped', status: 'skipped', icon: "av:skip-next", stacktrace: null},
              {name: 'it had another good one', status: 'passed', icon: "icons:done", stacktrace: null}
            ]},
            {name: 'Ask', url: 'ask', status: 'passed', icon: "icons:done-all", tests: [
              {name: 'it should pass this one', status: 'passed', icon: "icons:done", stacktrace: null},
              {name: 'it was good here too', status: 'passed', icon: "icons:done", stacktrace: null},
              {name: 'it had another good one', status: 'passed', icon: "icons:done", stacktrace: null}
            ]},
            {name: 'Some App', url: 'some_app', status: 'failed', icon: "icons:clear", tests: [
              {name: 'it should pass this one', status: 'passed', icon: "icons:done", stacktrace: null},
              {name: 'it got skipped', status: 'skipped', icon: "av:skip-next", stacktrace: null},
              {name: 'it did not pass this one', status: 'failed', icon: "icons:clear", stacktrace: 'Here\'s a simple stack trace on what went wrong, Blah blah blah...'},
              {name: 'it had another good one', status: 'passed', icon: "icons:done", stacktrace: null}
            ]},
            {name: 'Some Other App', url: 'some_other_app', status: 'passed', icon: "icons:done-all", tests: [
              {name: 'it should pass this one', status: 'passed', icon: "icons:done", stacktrace: null},
              {name: 'it was good here too', status: 'passed', icon: "icons:done", stacktrace: null},
              {name: 'it got skipped', status: 'skipped', icon: "av:skip-next", stacktrace: null},
              {name: 'it got skipped as well', status: 'skipped', icon: "av:skip-next", stacktrace: null},
              {name: 'it had another good one', status: 'passed', icon: "icons:done", stacktrace: null}
            ]},
            {name: 'Cool App Name Here', url: 'cool_app_name_here', status: 'failed', icon: "icons:clear", tests: [
              {name: 'it did not pass this one', status: 'failed', icon: "icons:clear", stacktrace: 'Here\'s a simple stack trace on what went wrong, Blah blah blah...'},
              {name: 'it was good here though', status: 'passed', icon: "icons:done", stacktrace: null},
              {name: 'it got skipped', status: 'skipped', icon: "av:skip-next", stacktrace: null},
              {name: 'it failed this one as well :(', status: 'failed', icon: "icons:clear", stacktrace: 'Here\'s a simple stack trace on what went wrong, Blah blah blah...'}
            ]}
          ];
}