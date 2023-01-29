import { useMemo } from "react";
import { Stack, Button, Spinner, Text } from "@chakra-ui/react";

const Launch = (props) => {
  const selectorBody = useMemo(() => {
    return props.planets?.map((planet) => (
      <option value={planet.kepler_name} key={planet.kepler_name}>
        {planet.kepler_name}
      </option>
    ));
  }, [props.planets]);

  const today = new Date().toISOString().split("T")[0];

  return (
    <Stack spacing={4}>
      <Text>
        Schedule a mission launch for interstellar travel to one of the Kepler
        Exoplanets.
      </Text>
      <Text>
        Only confirmed planets matching the following criteria are available for
        the earliest scheduled missions:
      </Text>
      <Stack as="ul" spacing={2}>
        <Text as="li">Planetary radius &lt; 1.6 times Earth's radius</Text>
        <Text as="li">
          Effective stellar flux &gt; 0.36 times Earth's value and &lt; 1.11
          times Earth's value
        </Text>
      </Stack>

      <form onSubmit={props.submitLaunch}>
        <Stack direction="row" spacing={4}>
          <label htmlFor="launch-day">Launch Date</label>
          <input
            type="date"
            id="launch-day"
            name="launch-day"
            min={today}
            max="2040-12-31"
            defaultValue={today}
          />
        </Stack>
        <Stack direction="row" spacing={4}>
          <label htmlFor="mission-name">Mission Name</label>
          <input type="text" id="mission-name" name="mission-name" />
        </Stack>
        <Stack direction="row" spacing={4}>
          <label htmlFor="rocket-name">Rocket Type</label>
          <input
            type="text"
            id="rocket-name"
            name="rocket-name"
            placeholder="Explorer IS1"
          />
        </Stack>
        <Stack direction="row" spacing={4}>
          <label htmlFor="planets-selector">Destination Exoplanet</label>
          <select id="planets-selector" name="planets-selector">
            {selectorBody}
          </select>
        </Stack>
        {/* <Clickable> */}
        <Button
          type="submit"
          variantColor="green"
          isDisabled={props.isPendingLaunch}
        >
          Launch Mission
        </Button>
        {/* </Clickable> */}
        {props.isPendingLaunch && <Spinner size="sm" />}
      </form>
    </Stack>
  );
};

export default Launch;
