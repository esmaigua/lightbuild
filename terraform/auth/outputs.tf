output "instance_public_ip" {
  description = "IP pública de la instancia EC2"
  value       = aws_instance.ec2_instance.public_ip
}

output "instance_id" {
  description = "ID de la instancia EC2"
  value       = aws_instance.ec2_instance.id
}

output "eip_address" {
  description = "IP elástica asociada"
  value       = aws_eip.ec2_eip.public_ip
}

output "ssh_connection_command" {
  description = "Comando SSH para conectarse"
  value       = "ssh -i ~/.ssh/${var.key_name}.pem ec2-user@${aws_instance.ec2_instance.public_ip}"
}
