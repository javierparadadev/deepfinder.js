# Build project
.PHONY: build
build: deps
	npm run-script build

# Install dependencies
.PHONY: deps
deps: 
	npm install

# Run tests
.PHONY: test
test:
	npm run-script test