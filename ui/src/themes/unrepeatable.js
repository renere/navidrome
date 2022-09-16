const unrepeatable = {
  300: '#aac6f8',
  500: '#7aa0ec',
  900: '#5e80c5',
}

// For Album, Playlist
const musicListActions = {
  padding: '1rem 0',
  alignItems: 'center',
  '@global': {
    button: {
      margin: 5,
      border: '1px solid transparent',
      backgroundColor: 'inherit',
      color: 'rgba(255, 255, 255, 0.8)',
      '&:hover': {
        border: '1px solid rgba(255, 255, 255, 0.8)',
        backgroundColor: 'inherit !important',
      },
    },
    'button:first-child:not(:only-child)': {
      '@media screen and (max-width: 720px)': {
        transform: 'scale(1.5)',
        margin: '1rem',
        '&:hover': {
          transform: 'scale(1.6) !important',
        },
      },
      transform: 'scale(2)',
      margin: '1.5rem',
      minWidth: 0,
      padding: 5,
      transition: 'transform .3s ease',
      background: unrepeatable['500'],
      color: '#fff',
      borderRadius: 500,
      border: 0,
      '&:hover': {
        transform: 'scale(2.1)',
        backgroundColor: `${unrepeatable['500']} !important`,
        border: 0,
      },
    },
    'button:only-child': {
      margin: '1.5rem',
    },
    'button:first-child>span:first-child': {
      padding: 0,
    },
    'button:first-child>span:first-child>span': {
      display: 'none',
    },
    'button>span:first-child>span, button:not(:first-child)>span:first-child>svg':
      {
        color: 'rgba(255, 255, 255, 0.8)',
      },
  },
}

export default {
  themeName: 'Unrepeatable',
  typography: {
    fontFamily: "system-ui, 'Helvetica Neue', Helvetica, Arial",
    h6: {
      fontSize: '1rem', // AppBar title
    },
  },
  palette: {
    primary: {
      light: unrepeatable['300'],
      main: unrepeatable['500'],
    },
    secondary: {
      main: '#fff',
      contrastText: '#fff',
    },
    background: {
      default: '#2b3142',
      paper: '#2b3142',
    },
    type: 'dark',
  },
  overrides: {
    MuiFormGroup: {
      root: {
        color: unrepeatable['500'],
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: '0.875rem',
        paddingTop: '4px',
        paddingBottom: '4px',
        margin: '3px',
        borderRadius: '.5rem',
      },
    },
    MuiDivider: {
      root: {
        margin: '.75rem 0',
      },
    },
    MuiButton: {
      root: {
        background: 'rgba(0, 0, 0, 0)',
        color: '#fff',
        border: '1px solid transparent',
        borderRadius: '0.5rem',
        '&:hover': {
          background: '#535e7e',
        },
      },
      textSecondary: {
        border: '1px solid rgba(255, 255, 255, 0.8)',
        background: '#2b3142',
        '&:hover': {
          border: '1px solid #fff !important',
          background: '#2b3142 !important',
        },
      },
      label: {
        color: '#fff',
        paddingRight: '1rem',
        paddingLeft: '0.7rem',
      },
    },
    MuiDrawer: {
      root: {
        background: '#2b3142',
        paddingTop: '10px',
      },
    },
    MuiTableHead: {
      root: {
        boxShadow: 'none !important',
      },
    },
    MuiTableRow: {
      root: {
        padding: '10px 0',
        transition: 'background-color .3s ease',
        '&:hover': {
          backgroundColor: '#31374b !important',
          borderRadius: '.625rem !important',
        },
        '@global': {
          'td:nth-child(4)': {
            color: '#fff !important',
          },
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: 'none',
        padding: '10px !important',
        color: 'rgba(255, 255, 255, 0.8) !important',
      },
      head: {
        borderBottom: 'none',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
      },
    },
    MuiTablePagination: {
      toolbar: {
        borderTop: '1px solid #2b3142',
      },
    },
    MuiAppBar: {
      positionFixed: {
        backgroundColor: '#2b3142 !important',
        boxShadow: 'none',
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: '.625rem',
      },
      elevation1: {
        boxShadow: '0px',
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: '.5rem',
      },
    },
    MuiChip: {
      root: {
        backgroundColor: '#535e7e',
      },
      outlined: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: '#31374b',
      },
    },
    MuiCard: {
      root: {
        margin: '1rem',
      },
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: '#3c455f',
          borderRadius: '.5rem',
        },
      },
    },
    MuiListItem: {
      button: {
        transition: 'background-color .3s ease !important',
        '&:hover': {
          backgroundColor: '#363c52',
        },
      },
    },
    MuiSwitch: {
      switchBase: {
        color: '#363c52',
      },
      track: {
        width: '84%',
        opacity: '1',
        backgroundColor: '#535e7e',
        scale: '140%',
        transform: 'translateX(.1rem)',
      },
      thumb: {
        scale: '60%',
        boxShadow: 'none',
      },
    },
    NDAlbumGridView: {
      albumName: {
        marginTop: '0.5rem',
        fontWeight: 700,
        textTransform: 'none',
        color: '#fff',
      },
      albumSubtitle: {
        color: 'rgba(255, 255, 255, 0.8)',
      },
      albumContainer: {
        backgroundColor: '#2b3142',
        borderRadius: '.625rem',
        padding: '.75rem',
        transition: 'background-color .3s ease',
        '&:hover': {
          backgroundColor: '#535e7e',
        },
      },
      albumPlayButton: {
        backgroundColor: unrepeatable['500'],
        borderRadius: '50%',
        boxShadow: '0 8px 8px rgb(0 0 0 / 30%)',
        padding: '0.35rem',
        transition: 'padding .3s ease',
        '&:hover': {
          background: `${unrepeatable['500']} !important`,
          padding: '0.45rem',
        },
      },
    },
    NDPlaylistDetails: {
      container: {
        background: '#363c52',
        borderRadius: 0,
        paddingTop: '2.5rem !important',
        boxShadow: 'none',
      },
      title: {
        fontSize: 'calc(1.5rem + 1.5vw);',
        fontWeight: 700,
        color: '#fff',
      },
      details: {
        fontSize: '.875rem',
        minWidth: '75vw',
        color: 'rgba(255,255,255, 0.8)',
      },
    },
    NDAlbumDetails: {
      root: {
        background: '#363c52',
        borderRadius: 0,
        boxShadow: 'none',
      },
      cardContents: {
        alignItems: 'center',
        paddingTop: '1.5rem',
      },
      recordName: {
        fontSize: 'calc(1rem + 1.5vw);',
        fontWeight: 700,
      },
      recordArtist: {
        fontSize: '.875rem',
        fontWeight: 700,
      },
      recordMeta: {
        fontSize: '.875rem',
        color: 'rgba(255,255,255, 0.8)',
      },
      commentBlock: {
        fontSize: '.875rem',
        color: 'rgba(255,255,255, 0.8)',
      },
    },
    NDAlbumShow: {
      albumActions: musicListActions,
    },
    NDPlaylistShow: {
      playlistActions: musicListActions,
    },
    NDAudioPlayer: {
      audioTitle: {
        color: '#fff',
        fontSize: '0.875rem',
      },
      songTitle: {
        fontWeight: 400,
      },
      songInfo: {
        fontSize: '0.675rem',
        color: 'rgba(255, 255, 255, 0.8)',
      },
      player: {
        border: '10px solid blue',
      },
    },
    NDLogin: {
      main: {
        boxShadow: 'none',
      },
      systemNameLink: {
        color: '#fff',
      },
      card: {
        border: 'none',
        borderRadius: '1rem',
        boxShadow:
          '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
        marginTop: '0',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
      },
      avatar: {
        marginBottom: 0,
      },
      icon: {
        borderRadius: '50%',
        boxShadow:
          '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
      },
    },
    RaLayout: {
      content: {
        padding: '0 !important',
        background: '#363c52',
      },
    },
    RaList: {
      content: {
        backgroundColor: 'inherit',
        boxShadow:
          '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
      },
    },
    RaDatagrid: {
      headerRow: {
        '&:hover': {
          backgroundColor: 'transparent !important',
        },
      },
      headerCell: {
        '&:first-child': {
          borderTopLeftRadius: '.625rem !important',
        },
        '&:last-child': {
          borderTopRightRadius: '.625rem !important',
        },
      },
    },
    RaListToolbar: {
      toolbar: {
        padding: '0 .55rem !important',
      },
    },
    RaSearchInput: {
      input: {
        paddingLeft: '.9rem',
        border: 0,
      },
    },
    RaFilterButton: {
      root: {
        marginRight: '1rem',
      },
    },
    RaPaginationActions: {
      currentPageButton: {
        border: 'none',
        borderRadius: 500,
        backgroundColor: '#535e7e',
      },
      button: {
        minWidth: 48,
        margin: '0 4px',
        border: 'none',
        borderRadius: 500,
        backgroundColor: '#31374b',
        '@global': {
          '> .MuiButton-label': {
            padding: 0,
          },
        },
      },
      actions: {
        '@global': {
          '.next-page': {
            marginLeft: 8,
            marginRight: 8,
          },
          '.previous-page': {
            marginRight: 8,
          },
        },
      },
    },
    RaBulkActionsToolbar: {
      toolbar: {
        backgroundColor: '#535e7e',
        borderRadius: '.625rem',
      },
    },
    RaSidebar: {
      root: {
        height: 'initial',
      },
    },
    makeStyles: {
      cover: {
        '& > $item': {
          borderRadius: '.5rem',
        },
      },
    },
  },
  player: {
    theme: 'dark',
    stylesheet: require('./unrepeatable.css.js'),
  },
}
