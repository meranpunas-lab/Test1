FROM ubuntu:22.04

# Install required dependencies
RUN apt-get update && \
    apt-get install -y ca-certificates libfontconfig1 && \
    rm -rf /var/lib/apt/lists/*

# Create grafana user and group with UID/GID 472 (Grafana standard)
RUN groupadd -g 472 grafana && \
    useradd -u 472 -g 472 -r -s /bin/bash grafana

# Create necessary directories for logs only (no data directory needed)
RUN mkdir -p /usr/share/grafana /var/log/grafana && \
    chown -R grafana:grafana /var/log/grafana

# Copy your pre-built Grafana files
COPY bin/ /usr/share/grafana/bin/
COPY conf/ /usr/share/grafana/conf/
COPY public/ /usr/share/grafana/public/
COPY plugins-bundled/ /usr/share/grafana/plugins-bundled/
COPY scripts/ /usr/share/grafana/scripts/

# Make binaries executable and set permissions
RUN chmod +x /usr/share/grafana/bin/grafana-server && \
    chown -R grafana:grafana /usr/share/grafana

# Set working directory
WORKDIR /usr/share/grafana

# Switch to grafana user
USER grafana

# Expose Grafana port
EXPOSE 3000

# Start Grafana directly (no entrypoint script needed)
CMD ["/usr/share/grafana/bin/grafana-server", \
     "--homepath=/usr/share/grafana", \
     "--config=/usr/share/grafana/conf/defaults.ini"]