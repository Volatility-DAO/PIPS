# How the methodology config file works

For each approved methodology, a `methodology_config.yaml` is required. Without this file, the backend services will not be able to run the methodology calculations.

To better understand how this file works, take a look at this example below:
```
methodology:
  - name: "MFIV"
    defaultDataPeriod: "*/5 * * * *"
    indices:
      - name: "MFIV-14D-ETH"
        dataPeriod: "*/10 * * * *"
      - name: "MFIV-14D-BTC"
```

The above file says the following:
1. The name of the methodology is **MFIV**
2. The default `dataPeriod` for all MFIV indices is every 5 minutes.
3. There are 2 indices for MFIV, **MFIV-14D-ETH** and **MFIV-14D-BTC**.
4. The **MFIV-14D-ETH** index has a data period override of every 10 minutes.

### Explained further
- `defaultDataPeriod:`
Defines the default `dataPeriod` that all indices for this methodology will use.  The `dataPeriod` is how often input data and results should be published on a publicly available, immutable database (e.g. IPFS).

- `indices:`
A list of all indices for this methodology. To add an index to this methodology, append `- name: "INDEX NAME HERE"`. See below on how index names are created.

- If you'd like to override the default data period for this index, you can supply an optional parameter `dataPeriod`, followed by its override expression.

---
## Validating your yaml file.
To verify that your yaml file is valid, you can use this tool: http://www.yamllint.com/

## Generating data period expressions
To learn how to generate the expression, you can use this tool: https://cronmaster.online/. Note: Your `dataPeriod` can not be less than one minute.

## Anatomy of a index name
An index name is comprised of 3 values separated by a dash.

```<METHODOLOGY>-<TIMEPERIOD>-<ASSET>```

1. **METHODOLOGY** - This is the same name as the methodology. In the example above, "MFIV".
2. **TIMEPERIOD** - This is the time period the methodology uses for calculation. In the example above, "14D" (see below about how to generate a time period).
3. **ASSET** - This is the asset being measured and it must be whitelisted within a METHODOLOGY-TIMEPERIOD-ASSET.md file. 

Examples:
- `MFIV-14D-ETH` - MFIV 14-day Ethereum
- `MFIV-1M-BTC` - MFIV 1-month Bitcoin


## Generating TIMEPERIOD
The period uses standardized time formats, where lower-denomination units are lowercase and higher-denomination units are uppercase.
- `m` = minutes
- `h` = hours
- `D` = Days
- `W` = Weeks
- `M` = Months
- `Y` = Year

For example, `14D` means 14 day volatility.