const GREEN_DARK = '#1C3810';
const GREEN = '#4E9D2D';
const GREEN_BORDER= '#62C538';
const GREEN_LIGHT = '#A7EB8A';
const BROWN = '#522C18';
const RED = '#FF4E52';
const BLACK = '#0A1406';
const GREY_DARK = '#616161';
const GREY = '#BFBFBF';
const GREY_LIGHT = '#EFEFEF';
const OFF_WHITE = '#F9F9F9';
const WHITE = '#FFFFFF';

export default {
  h1: {
    color: GREEN_DARK,
    fontSize: 25
  },
  h2: {
    color: GREEN_DARK,
    fontSize: 17
  },
  h3: {
    color: GREEN,
    fontSize: 17
  },
  p: {
    color: BLACK,
    fontSize: 17
  },
  ul: {
    color: BLACK,
    fontSize: 17
  },
  strong: {
    color: BLACK,
    fontSize: 17
  },
  appHeader: {
    title: {
      color: WHITE,
      fontSize: 15
    },
    links: {
      color: GREEN_LIGHT,
      fontSize: 13
    }
  },
  tabBar: {
    fontSize: 13,
    active: {
      color: GREEN_LIGHT
    },
    default: {
      color: WHITE
    }
  },
  button: {
    height: 52,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: BLACK,
    shadowOpacity: 0.16,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
  },
  btnPrimary: {
    text: {
      color: WHITE,
      fontSize: 15,
      textTransform: 'uppercase'
    },
    backgroundColor: GREEN,
  },
  btnSecondary: {
    text: {
      color: GREEN,
      fontSize: 15,
      textTransform: 'uppercase'
    },
    backgroundColor: WHITE,
    borderWidth: 2,
    borderColor: GREEN,
  },
  forms: {
    label: {
      fontSize: 15,
      color: GREEN_LIGHT
    },
    input: {
      height: 50,
      backgroundColor: WHITE,
      fontSize: 17,
      color: BLACK,
      borderWidth: 2,
      borderColor: GREEN_LIGHT,
      borderRadius: 4,
      paddingHorizontal: 8,
      paddingVertical: 10
    },
    errorInput: {
      borderColor: 'red',
      borderWidth: 2,
      paddingHorizontal: 5
    },
    errorMessage: {
      color: RED,
      fontSize: 15
    }
  }
}