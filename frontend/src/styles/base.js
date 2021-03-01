import {theme} from './theme'

export default {
  navigation: {
    colors: {
      primary: theme.GREEN_LIGHT,
      card: theme.GREEN_DARK,
      text: theme.WHITE,
      notification: 'rgb(255, 69, 58)',
    }
  },
  statusBar: {
    backgroundColor: theme.GREEN_DARK
  },
  h1: {
    color: theme.GREEN_DARK,
    fontSize: theme.TEXT_LARGE_SIZE
  },
  h2: {
    color: theme.GREEN_DARK,
    fontSize: theme.TEXT_MEDIUM_SIZE
  },
  h3: {
    color: theme.GREEN,
    fontSize: theme.TEXT_MEDIUM_SIZE
  },
  p: {
    color: theme.BLACK,
    fontSize: theme.TEXT_MEDIUM_SIZE
  },
  ul: {
    row: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    bullet: {
      fontSize:26,
      color: theme.BLACK,
    },
    bulletText: {
      color: theme.BLACK,
      fontSize: theme.TEXT_MEDIUM_SIZE,
      paddingHorizontal: 7,
    }
  },
  strong: {
    color: theme.BLACK,
    fontSize: theme.TEXT_MEDIUM_SIZE
  },
  appHeader: {
    title: {
      color: theme.WHITE,
      fontSize: theme.TEXT_PRIMARY_SIZE
    },
    links: {
      color: theme.GREEN_LIGHT,
      fontSize: theme.TEXT_SMALL_SIZE
    }
  },
  tabBar: {
    fontSize: theme.TEXT_SMALL_SIZE,
    active: {
      color: theme.GREEN_LIGHT
    },
    default: {
      color: theme.WHITE
    }
  },
  button: {
    height: 52,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.BLACK,
    shadowOpacity: 0.16,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
  },
  btnPrimary: {
    text: {
      color: theme.WHITE,
      fontSize: theme.TEXT_PRIMARY_SIZE,
      textTransform: 'uppercase'
    },
    backgroundColor: theme.GREEN,
  },
  btnSecondary: {
    text: {
      color: theme.GREEN,
      fontSize: theme.TEXT_PRIMARY_SIZE,
      textTransform: 'uppercase'
    },
    backgroundColor: theme.WHITE,
    borderWidth: 2,
    borderColor: theme.GREEN,
  },
  forms: {
    label: {
      fontSize: theme.TEXT_PRIMARY_SIZE,
      color: theme.GREEN_LIGHT
    },
    input: {
      height: 50,
      backgroundColor: theme.WHITE,
      fontSize: theme.TEXT_MEDIUM_SIZE,
      color: theme.BLACK,
      borderWidth: 2,
      borderColor: theme.GREEN_LIGHT,
      borderRadius: 4,
      paddingHorizontal: 8,
      paddingVertical: 10
    },
    errorInput: {
      borderColor: theme.RED,
      borderWidth: 2,
      paddingHorizontal: 5
    },
    errorMessage: {
      color: theme.RED,
      fontSize: theme.TEXT_PRIMARY_SIZE
    }
  },
  tag: {
    fontSize: theme.TEXT_PRIMARY_SIZE,
    color: theme.WHITE,
    backgroundColor: theme.GREEN_LIGHT,
    borderRadius: 13,
    paddingHorizontal: 10,
    paddingVertical: 2
  },
  alerts: {
    info: {
      fontSize: theme.TEXT_PRIMARY_SIZE,
      color: theme.WHITE,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255, 0.3)',
      backgroundColor: 'rgba(255,255,255, 0.1)'
    },
    success: {
      fontSize: theme.TEXT_PRIMARY_SIZE,
      color: theme.GREEN,
      borderWidth: 1,
      borderColor: theme.GREEN_LIGHT,
      backgroundColor: theme.ALERTS_SUCCESS
    },
    alert: {
      fontSize: theme.TEXT_PRIMARY_SIZE,
      color: theme.RED,
      borderWidth: 1,
      borderColor: '#FABDBF',
      backgroundColor: '#F9EFEF'
    },
    links: {
      link: {
        fontSize: theme.TEXT_MEDIUM_SIZE,
        color: theme.GREEN
      },
      linkSmall: {
        fontSize: theme.TEXT_PRIMARY_SIZE,
        color: theme.GREEN
      },
      linkAlt: {
        fontSize: theme.TEXT_PRIMARY_SIZE,
        color: theme.GREEN_LIGHT
      },
      linkEdit: {
        fontSize: theme.TEXT_PRIMARY_SIZE,
        color: theme.GREEN
      }
    }
  }
}