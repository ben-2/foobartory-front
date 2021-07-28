import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStoreState, useStoreActions } from '../../hooks';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export function LangSelect() {
  const lang = useStoreState((state) => state.lang);
  const setLang = useStoreActions((actions) => actions.setLang);
  const classes = useStyles();

  const handleChange = (event: any) => {
    const value: string = event.target.value;
    setLang(value);
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="select-language">
          <FormattedMessage id="lang-used" />
        </InputLabel>
        <Select
          data-testid="lang"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          onChange={handleChange}
        >
          <MenuItem value={'fr'}><FormattedMessage id="french" /></MenuItem>
          <MenuItem value={'en'}><FormattedMessage id="english" /></MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
