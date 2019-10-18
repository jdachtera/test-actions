const { name, version } = require("../package.json");

const { exec } = require("child_process");

const registry = process.argv[2] || "https://registry.npmjs.org/";

exec(`npm search ${name} --json --registry ${registry}`, (error, stdout) => {
  const results = JSON.parse(stdout);

  const versionExists = results.find(
    package => package.name === name && package.version === version
  );

  if (versionExists) {
    console.log(`Package ${name}@${version} already exists`);
  }

  process.exit(versionExists ? 0 : 1);
});
